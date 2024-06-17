"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import "glightbox/dist/css/glightbox.min.css"

const HomeSwiper = () => {
    return (
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
            <SwiperSlide>
                <section className="relative">
                    <div className="container-fluid md:mx-4 mx-2">
                        <div className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden bg-cover bg-no-repeat bg-center transition-background duration-300 bg-[url('/bg/01.jpg')]">
                            <div className="absolute inset-0 bg-black/60"></div>
                            <div className="max-w-7xl mx-auto w-full relative px-10">
                                <div className="grid grid-cols-1">
                                    <div className="md:text-start text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">We will help you find <br /> your <span className="text-green-600">Wonderful</span> home</h1>
                                        <p className="text-white/70 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative">
                    <div className="container-fluid md:mx-4 mx-2">
                        <div className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden bg-cover bg-no-repeat bg-center transition-background duration-300 bg-[url('/bg/02.jpg')]">
                            <div className="absolute inset-0 bg-black/60"></div>
                            <div className="max-w-7xl mx-auto w-full relative px-10">
                                <div className="grid grid-cols-1">
                                    <div className="md:text-start text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">We will help you find <br /> your <span className="text-green-600">Wonderful</span> home</h1>
                                        <p className="text-white/70 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative">
                    <div className="container-fluid md:mx-4 mx-2">
                        <div className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden bg-cover bg-no-repeat bg-center transition-background duration-300 bg-[url('/bg/05.jpg')]">
                            <div className="absolute inset-0 bg-black/60"></div>
                            <div className="max-w-7xl mx-auto w-full relative px-10">
                                <div className="grid grid-cols-1">
                                    <div className="md:text-start text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">We will help you find <br /> your <span className="text-green-600">Wonderful</span> home</h1>
                                        <p className="text-white/70 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeSwiper