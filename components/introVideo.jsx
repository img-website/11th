"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { PlayIcon } from '@/components/icons'
import { Button } from '@nextui-org/react'
import Fancybox from "@/components/Fancybox"
import { useFirebase } from '@/app/context/Firebase'
import { doc, getDoc } from 'firebase/firestore'
import SkeletonIntroVideo from '@/components/skeleton/skeletonIntroVideo'


const IntroVideo = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        try {
            const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "intro_video"));
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
        loading ? <SkeletonIntroVideo /> :
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-5">
                    <div className="relative">
                        <Image width={1200} height={600} className="rounded-xl shadow-md aspect-square object-cover" src={data?.overlayImgUrl || "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=90&w=1887&auto=format&fit=crop"} alt="" />
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false
                                }
                            }}
                        >
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link data-fancybox="gallery" href={data?.videoUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="glightbox2 size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <PlayIcon />
                                </Link>
                            </div>
                        </Fancybox>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-4">
                        <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">{data?.title || "Efficiency. Transparency. Control."}</h4>
                        <p className="text-slate-400 max-w-xl">{data?.description}</p>

                        <div className="mt-4">
                            <Button as={Link} href={data?.buttonUrl || ""} variant='bordered'>{data?.buttonText || "Get Started"}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroVideo