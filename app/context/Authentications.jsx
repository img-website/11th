import { createContext, useContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { Timestamp, addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useFirebase } from "@/app/context/Firebase";

const AuthContext = createContext(null);
export const useAuthentications = () => useContext(AuthContext);


const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
    const { firebaseAuth, firebaseDB } = useFirebase();

    const router = useRouter()

    const [mainLoading, setMainLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [DBUser, setDBUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                setUser(user);

                const docRef = doc(firebaseDB, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setDBUser(userData);
                    if(userData.isAdmin){
                        document.cookie = `isAdmin=true; path=/;`;
                    } else {
                        document.cookie = "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    }
                } else {
                    setDBUser(null);
                }

                setIsLoggedIn(true);
                document.cookie = `accessToken=${user.accessToken}; path=/;`;

            } else {
                setUser(null);
                setIsLoggedIn(false);
                document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        });
    }, [])

    const signupUserWithEmailAndPassword = async (email, password, name, phoneNumber) => {
        try {
            try {
                const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
                const user = userCredential.user;

                const userRef = doc(firebaseDB, "users", user.uid);

                await setDoc(userRef, {
                    isAdmin: false,
                    displayName: user?.displayName || name,
                    email: user?.email,
                    photoURL: user?.photoURL,
                    emailVerified: user?.emailVerified,
                    phoneNumber: user?.phoneNumber || phoneNumber,
                    providerId: user?.providerData[0].providerId,
                    uid: user?.uid,
                    createdAt: Timestamp.fromDate(new Date(user?.metadata.creationTime)),
                    updatedAt: Timestamp.fromDate(new Date(user.metadata.lastSignInTime))
                });

                const activityRef = collection(userRef, "activity");
                await addDoc(activityRef, {
                    timestamp: serverTimestamp(),
                    type: "signup",
                });

                try {
                    await updateProfile(firebaseAuth.currentUser, {
                        displayName: name || user?.displayName,
                    });
                } catch (error) {
                    console.error("Error updating user profile:", error);
                    toast.error("An error occurred during signup.", {
                        description: "Please try again."
                    });
                }

                setMainLoading(true);
                router.push('/');
                router.refresh();
                toast.success("Signup successful.", {
                    description: 'Welcome to Elevanth!',
                });
                return user;
            } catch (error_1) {
                // Handle Errors here.
                const errorCode = error_1.code;
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        toast.error("Email already in use.", {
                            description: 'Please choose a different email address.',
                        });
                        break;
                    case 'auth/weak-password':
                        toast.error("Password is too weak.", {
                            description: 'Please choose a stronger password with at least 6 characters.',
                        });
                        break;
                    case 'auth/invalid-email':
                        toast.error("Invalid email format.", {
                            description: 'Please enter a valid email address.',
                        });
                        break;
                    case 'auth/too-many-requests':
                        toast.error("Too many signup attempts.", {
                            description: 'Please try again later.',
                        });
                        break;
                    // Handle other potential errors (see Firebase documentation)
                    default:
                        console.error("Unexpected signup error:", error_1);
                        toast.error("An error occurred during signup. Please try again.");
                }
            }
        } finally {
            setTimeout(() => {
                setMainLoading(false);
            }, 1000);
        }
    }

    const signinUserWithEmailAndPass = async (email, password) => {
        try {
            try {
                const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
                const user = userCredential.user;

                const userRef = doc(firebaseDB, "users", user.uid);

                await setDoc(userRef, {
                    updatedAt: Timestamp.fromDate(new Date(user.metadata.lastSignInTime))
                }, { merge: true });

                const activityRef = collection(userRef, "activity");
                await addDoc(activityRef, {
                    timestamp: serverTimestamp(),
                    type: "login",
                });

                setMainLoading(true);
                router.push('/');
                router.refresh();
                toast.success("Login successful.", {
                    description: 'Welcome back!',
                });
                return user;
            } catch (error) {
                const errorCode = error.code;
                switch (errorCode) {
                    case 'auth/wrong-password':
                        toast.error("Incorrect password.", {
                            description: 'Please try again.',
                        });
                        break;
                    case 'auth/user-not-found':
                        toast.error("Email not found.", {
                            description: 'Please check your email address or create a new account.',
                        });
                        break;
                    case 'auth/invalid-email':
                        toast.error("Invalid email format.", {
                            description: 'Please enter a valid email address.',
                        });
                        break;
                    case 'auth/too-many-requests':
                        toast.error("Too many login attempts.", {
                            description: 'Please try again later.',
                        });
                        break;
                    case 'auth/invalid-credential':
                        toast.error("Invalid login credentials.", {
                            description: 'Please try again.',
                        });
                        break;
                    // Handle other potential errors (see Firebase documentation)
                    default:
                        console.error("Unexpected login error:", error);
                        toast.error("An error occurred during login. Please try again.");
                }
            }
        } finally {
            setTimeout(() => {
                setMainLoading(false);
            }, 1000);
        }
    }

    const signinWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider).then(async userCredential => {
            const user = userCredential.user;
            
            const userRef = doc(firebaseDB, "users", user.uid);

            const isNewUser = user.metadata.creationTime === user.metadata.lastSignInTime;
            
            if (isNewUser) {
                await setDoc(userRef, {
                    isAdmin: false,
                    displayName: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                    emailVerified: user?.emailVerified,
                    phoneNumber: user?.phoneNumber,
                    providerId: user?.providerData[0].providerId,
                    uid: user?.uid,
                    createdAt: Timestamp.fromDate(new Date(user?.metadata.creationTime)),
                    updatedAt: Timestamp.fromDate(new Date(user.metadata.lastSignInTime))
                });

                const activityRef = collection(userRef, "activity");
                await addDoc(activityRef, {
                    timestamp: serverTimestamp(),
                    type: "signup",
                });

                toast.success("Signup successful.", {
                    description: 'Welcome to Elevanth!',
                })
            } else {
                let providerId = "";
                await getDoc(userRef).then(async (doc) => {
                    if (doc.exists()) {
                        providerId = doc.data().providerId
                    }
                })
                if (providerId == "google.com") {
                    await setDoc(userRef, {
                        updatedAt: Timestamp.fromDate(new Date(user.metadata.lastSignInTime))
                    }, { merge: true });

                    const activityRef = collection(userRef, "activity");
                    await addDoc(activityRef, {
                        timestamp: serverTimestamp(),
                        type: "login",
                    });

                    toast.success("Login successful.", {
                        description: 'Welcome back!',
                    })
                } else {
                    await setDoc(userRef, {
                        displayName: user?.displayName,
                        email: user?.email,
                        photoURL: user?.photoURL,
                        emailVerified: user?.emailVerified,
                        phoneNumber: user?.phoneNumber,
                        providerId: user?.providerData[0].providerId,
                        uid: user?.uid,
                        updatedAt: Timestamp.fromDate(new Date(user.metadata.lastSignInTime))
                    }, { merge: true });

                    const activityRef = collection(userRef, "activity");
                    await addDoc(activityRef, {
                        timestamp: serverTimestamp(),
                        type: "convert_in_google_login",
                    });

                    toast.success("Login successful.", {
                        description: 'Welcome back!',
                    })

                    setTimeout(() => {
                        toast.warning("Google Linked Successfully.", {
                            description: 'Now you can login with your Google account only.',
                        })
                    }, 3000);
                }

            }

            setMainLoading(true);
            router.push('/')
            router.refresh()
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    toast.error("Email already in use.", {
                        description: 'Please choose a different email address.',
                    });
                    break;
                case 'auth/weak-password':
                    toast.error("Password is too weak.", {
                        description: 'Please choose a stronger password with at least 6 characters.',
                    });
                    break;
                case 'auth/invalid-email':
                    toast.error("Invalid email format.", {
                        description: 'Please enter a valid email address.',
                    });
                    break;
                case 'auth/too-many-requests':
                    toast.error("Too many signup attempts.", {
                        description: 'Please try again later.',
                    });
                    break;
                case 'auth/popup-closed-by-user':
                    toast.error("Signup cancelled by user.", {
                        description: 'Please try again.',
                    });
                    break;
                // Google sign-in specific errors
                case 'auth/account-exists-with-different-credential':
                    toast.error("An account already exists with the provided email address. Please login using that account or sign up with a different email.");
                    break;
                case 'auth/invalid-credential':
                    // More specific message for Google sign-in
                    toast.error("Invalid Google sign-in credentials. Please try again.");
                    break;
                // Handle other potential errors (see Firebase documentation)
                default:
                    console.error("Unexpected signup error:", error);
                    toast.error("An error occurred during signup. Please try again.");
            }

        }).finally(() => {
            setTimeout(() => {
                setMainLoading(false);
            }, 1000);
        });
    }


    const isLoggedInOrNot = () => {
        const accessToken = document.cookie.split(';').find(c => c.startsWith('accessToken='));
        setIsLoggedIn(accessToken ? true : false);
    }

    useEffect(() => {
        isLoggedInOrNot();
    }, [])

    
    const isLoggedInAsAdmin = () => {
        const checkIsAdmin = document.cookie.split(';').find(c => c.startsWith('isAdmin='));
        setIsAdmin(checkIsAdmin ? true : false);
    }

    useEffect(() => {
        isLoggedInAsAdmin();
    }, [])

    const signOutHandle = async () => {

        setMainLoading(true)
        signOut(firebaseAuth).then(async (res) => {
            const userRef = doc(firebaseDB, "users", user?.uid); // Get current user reference
            const activityRef = collection(userRef, "activity");

            // Add a logout activity document with server timestamp for accuracy
            await addDoc(activityRef, {
                timestamp: serverTimestamp(),
                type: "logout", // Indicate logout activity type
            });
            router.push('/');
            router.refresh()
            setIsLoggedIn(false);
            toast.info("Logout successful.", {
                description: 'See you soon!',
            })
            // Sign-out successful.
        }).catch((error) => {
            toast.error("An error occurred during logout. Please try again.");
            console.error("Error signing out:", error);
            // An error happened.
        }).finally(() => {
            isLoggedInOrNot()
            setTimeout(() => {
                setMainLoading(false);
            }, 1000);
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setMainLoading(false);
        }, 1000);
    }, [])

    useEffect(() => {
        isLoggedInOrNot();
    }, [])




    return (
        <AuthContext.Provider value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPass, signinWithGoogle, signOutHandle, isLoggedIn, user, DBUser, isAdmin, mainLoading, setMainLoading }}>
            {children}
        </AuthContext.Provider>
    );

}