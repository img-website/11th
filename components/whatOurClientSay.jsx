"use client"
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useFirebase } from '@/app/context/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import SkeletonWhatOurClientSay from '@/components/skeleton/skeletonWhatOurClientSay';

const WhatOurClientSay = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        try {
            const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "testimonial"));
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
        loading ? <SkeletonWhatOurClientSay /> :
            <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{data?.heading || "What Our Client Say ?"}</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">{data?.description || "A great plateform to buy, sell and rent your properties without any agent or commisions."}</p>
                </div>

                <div className="flex justify-center relative pt-16 px-4">
                    <div className="relative lg:w-1/3 md:w-1/2 w-full">
                        <div className="absolute -top-20 md:-start-24 -start-0">
                            <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                        </div>

                        <div className="absolute bottom-28 md:-end-24 -end-0">
                            <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                        </div>

                        <Swiper
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper2 w-full [&_.swiper-pagination-bullet]:bg-white"
                        >
                            {data?.testimonial1 && data?.testimonial1?.length > 0 && data?.testimonial1?.map((item) => (
                                <SwiperSlide key={Math.random()}>
                                    <div className="text-center">
                                        <p className="text-xl text-slate-400 italic">{item?.comment}</p>

                                        <div className="text-center mt-5">
                                            <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>

                                            <Image width={400} height={400} src={item?.image} className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                            <h6 className="mt-2 fw-semibold">{item?.name}</h6>
                                            <span className="text-slate-400 text-sm">{item?.designation}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
    )
}

export default WhatOurClientSay