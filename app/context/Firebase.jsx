import { initializeApp } from "firebase/app";
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyC9ycvbnsv2jysvgPp2Xhb_4yTNzDCsKD0",
    authDomain: "elevanth-project.firebaseapp.com",
    projectId: "elevanth-project",
    storageBucket: "elevanth-project.appspot.com",
    messagingSenderId: "865782741662",
    appId: "1:865782741662:web:ddd13a71bb70015752998f",
    measurementId: "G-9K9W8PED1Q"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const firebaseDB = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();


export const FirebaseProvider = ({ children }) => {
    const router = useRouter()

    const [mainLoading, setMainLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
                // console.log(user)
                // Set a cookie with a valid access token (if available)
                document.cookie = `accessToken=${user.accessToken}; path=/;`; // Assuming access token is available on `user`

            } else {
                setUser(null);
                document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Remove access token cookie
            }
            checkLogin();
        });
    }, [])

    const signupUserWithEmailAndPassword = (email, password, name, phoneNumber) => {
        setMainLoading(true);
        createUserWithEmailAndPassword(firebaseAuth, email, password).then(async userCredential => {
            const user = userCredential.user;

            await setDoc(doc(firebaseDB, "users", user.uid), {
                isAdmin: true,
                displayName: user?.displayName || name,
                email: user?.email,
                photoURL: user?.photoURL,
                emailVerified: user?.emailVerified,
                phoneNumber: user?.phoneNumber || phoneNumber,
                providerId: user?.providerData[0].providerId,
                uid: user?.uid,
                createdAt: user?.metadata.creationTime,
                updatedAt: user?.metadata.lastSignInTime
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



            router.push('/')
            router.refresh()
            toast.success("Signup successful.", {
                description: 'Welcome to Elevanth!',
            })
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            // Handle signup errors gracefully, e.g., display specific error messages based on error code
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
                    console.error("Unexpected signup error:", error);
                    toast.error("An error occurred during signup. Please try again.");
            }

        }).finally(() => {
            setTimeout(() => {
                setMainLoading(false);
            }, 1000);
        });
    }


    const signinUserWithEmailAndPass = (email, password) => {
        setMainLoading(true);
        signInWithEmailAndPassword(firebaseAuth, email, password).then(userCredential => {
            const user = userCredential.user;
            router.push('/')
            router.refresh()
            toast.success("Login successful.", {
                description: 'Welcome back!',
            })
        }).catch((error) => {
            const errorCode = error.code;
            // Handle signup errors gracefully, e.g., display specific error messages based on error code
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

        }).finally(() => {
            setTimeout(() => {
                setMainLoading(false);
            }, 1000);
        });
    }

    const signinWithGoogle = () => {
        setMainLoading(true);
        console.log(mainLoading)
        signInWithPopup(firebaseAuth, googleProvider).then(async userCredential => {
            const user = userCredential.user;
            const isNewUser = user.metadata.creationTime === user.metadata.lastSignInTime; // Check if creation and last sign-in times match

            router.push('/')
            router.refresh()

            if (isNewUser) {

                await setDoc(doc(firebaseDB, "users", user.uid), {
                    isAdmin: true,
                    displayName: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                    emailVerified: user?.emailVerified,
                    phoneNumber: user?.phoneNumber,
                    providerId: user?.providerData[0].providerId,
                    uid: user?.uid,
                    createdAt: user?.metadata.creationTime,
                    updatedAt: user?.metadata.lastSignInTime
                });
                toast.success("Signup successful.", {
                    description: 'Welcome to Elevanth!',
                })
            } else {
                const userRef = doc(firebaseDB, "users", user.uid);
                setDoc(userRef, {
                    isAdmin: true,
                    displayName: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                    emailVerified: user?.emailVerified,
                    phoneNumber: user?.phoneNumber,
                    providerId: user?.providerData[0].providerId,
                    uid: user?.uid,
                    updatedAt: user?.metadata.lastSignInTime
                }, { merge: true });
                toast.success("Login successful.", {
                    description: 'Welcome back!',
                })
            }

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            // Handle signup errors gracefully, e.g., display specific error messages based on error code
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

    const checkLogin = useCallback(() => {
        // Check for a valid access token in the cookie
        const accessToken = document.cookie.split(';').find(c => c.startsWith('accessToken='));
        // console.log("accessToken", accessToken);
        setIsLoggedIn(!!accessToken); // Set isLoggedIn state based on the presence of an access token
        return !!accessToken; // Return true if accessToken exists, false otherwise

    }, [])

    const signOutHandle = () => {
        setMainLoading(true)
        signOut(firebaseAuth).then(() => {
            router.push('/login');
            router.refresh()
            toast.info("Logout successful.", {
                description: 'See you soon!',
            })
            // Sign-out successful.
        }).catch((error) => {
            toast.error("An error occurred during logout. Please try again.");
            console.error("Error signing out:", error);
            // An error happened.
        }).finally(() => {
            setTimeout(() => {
                setMainLoading(false);
            }, 1000);
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setMainLoading(false);
        }, 1000);
    }, [checkLogin])




    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPass, signinWithGoogle, signOutHandle, isLoggedIn, user, mainLoading, setMainLoading }}>
            {children}
        </FirebaseContext.Provider>
    );

}