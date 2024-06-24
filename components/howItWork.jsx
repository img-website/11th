"use client"
import React, { useEffect } from 'react'
import { useFirebase } from '@/app/context/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import SkeletonHowItWork from '@/components/skeleton/skeletonHowItWork';

const HowItWork = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        try {
            const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "how_its_work_section"));
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
        loading ? <SkeletonHowItWork /> :
            <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{data?.heading || "How It Works"}</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">{data?.tagline || "A great plateform to buy, sell and rent your properties without any agent or commisions."}</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {
                        data?.cards?.length > 0 && data?.cards?.map((item, index) => (
                            <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon size-32 fill-green-600/5 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl md:text-6xl flex align-middle justify-center items-center font-bold">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h5 className="text-xl font-medium">{item?.title || "Evaluate Property"}</h5>
                                    <p className="text-slate-400 mt-3">{item?.description || "If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making."}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default HowItWork