"use client"
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import "glightbox/dist/css/glightbox.min.css"
import { doc, getDoc } from 'firebase/firestore';
import { useFirebase } from '@/app/context/Firebase';
import Image from 'next/image';
import SkeletonHomeSwiper from '@/components/skeleton/skeletonHomeSwiper';

const HomeSwiper = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    const getData = async () => {
        try {
            const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "homePage"));
            setData(docSnap.data().HeroBannerContent);
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
        loading ? <SkeletonHomeSwiper /> :
        <Swiper
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            loop={true}
            effect={'fade'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper w-full [&_.swiper-pagination-bullet]:bg-white"
        >
            {
                data && data?.length > 0 && data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <section className="relative">
                            <div className="container-fluid md:mx-4 mx-2">
                                <div className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden bg-cover bg-no-repeat bg-center transition-background duration-300 min-h-[calc(100dvh-150px)]">
                                    <Image className='object-cover size-full absolute inset-0' width={400} height={400} src={item?.bannerImgUrl} alt={item?.title} />
                                    <div className="absolute inset-0 bg-black/60"></div>
                                    <div className="max-w-7xl mx-auto w-full relative px-10">
                                        <div className="grid grid-cols-1">
                                            <div className="md:text-start text-center">
                                                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">{item?.title}</h1>
                                                <p className="text-white/70 text-xl max-w-xl">{item?.shortDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default HomeSwiper