"use client"
import { useFirebase } from "@/app/context/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import SkeletonStats from "@/components/skeleton/skeletonStats";

const Stats = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "stats"));
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
        loading ? <SkeletonStats /> :
            <section className="relative py-24 bg-[url('/bg/01.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="max-w-7xl mx-auto w-full px-4 relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                        <div className="lg:col-start-2 lg:col-span-10">
                            <div className="grid md:grid-cols-3 grid-cols-1 items-center">

                                <div className="counter-box text-center">
                                    <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="1548">{data?.propertiesSell}</span>+</h1>
                                    <h5 className="counter-head text-white text-lg font-medium">Properties Sell</h5>
                                </div>

                                <div className="counter-box text-center">
                                    <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="25">{data?.awardGained}</span>+</h1>
                                    <h5 className="counter-head text-white text-lg font-medium">Award Gained</h5>
                                </div>

                                <div className="counter-box text-center">
                                    <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><span className="counter-value" data-target="9">{data?.yearsExperience}</span>+</h1>
                                    <h5 className="counter-head text-white text-lg font-medium">Years Experience</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Stats