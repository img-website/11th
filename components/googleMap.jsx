"use client"
import { useFirebase } from "@/app/context/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import SkeletonGoogleMap from "@/components/skeleton/skeletonGoogleMap";

const GoogleMap = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "contact_us"));
            setData(docSnap.data());
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        loading ? <SkeletonGoogleMap /> :
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe src={data?.address?.mapUrl} className="w-full h-[500px] border-0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
    )
}

export default GoogleMap