"use client"
import { useFirebase } from "@/app/context/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { EmailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import SkeletonContactStats from "@/components/skeleton/skeletonContactStats";

const ContactStats = () => {
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
        loading ? <SkeletonContactStats /> :
            <section className="relative">
                <div className="max-w-7xl mx-auto w-full px-4 relative py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon size-32 fill-green-600/5 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <PhoneIcon className="size-16" />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">{data?.phone?.label}</h5>
                                <p className="text-slate-400 mt-3">{data?.phone?.tagline}</p>

                                <div className="mt-5">
                                    <a href="tel:+152534-468-854" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">{data?.phone?.phoneNumber}</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon size-32 fill-green-600/5 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <EmailIcon className="size-16" />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">{data?.email?.label}</h5>
                                <p className="text-slate-400 mt-3">{data?.email?.tagline}</p>

                                <div className="mt-5">
                                    <a href={`mailto:${data?.email?.email}`} className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">{data?.email?.email}</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon size-32 fill-green-600/5 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <MapPinIcon className="size-16" />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">{data?.address?.label}</h5>
                                <p className="text-slate-400 mt-3">{data?.address?.location}</p>

                                <div className="mt-5">
                                    <a href={data?.address?.mapUrl}
                                        data-type="iframe" className="video-play-icon read-more lightbox btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">{data?.address?.mapUrlButton}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactStats