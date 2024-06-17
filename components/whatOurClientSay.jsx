"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

const WhatOurClientSay = () => {
    return (
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Client Say ?</h3>

                <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
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
                        // pagination={{
                        //     dynamicBullets: true,
                        //     clickable: true
                        // }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper2 w-full [&_.swiper-pagination-bullet]:bg-white"
                    >
                        <SwiperSlide>
                            <div className="text-center">
                                <p className="text-xl text-slate-400 italic"> &quot; 11thUI made the processes so easy. 11thUI instantly increased the amount of interest and ultimately saved us over $10,000. &quot; </p>

                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>

                                    <Image width={400} height={400} src="/client/01.jpg" className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                    <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="text-center">
                                <p className="text-xl text-slate-400 italic"> &quot; I highly recommend 11thUI as the new way to sell your home &quot;by owner&quot;. My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. &quot; </p>

                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>

                                    <Image width={400} height={400} src="/client/02.jpg" className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                    <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="text-center">
                                <p className="text-xl text-slate-400 italic"> &quot; My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! &quot; </p>

                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>

                                    <Image width={400} height={400} src="/client/03.jpg" className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                    <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="text-center">
                                <p className="text-xl text-slate-400 italic"> &quot; Great experience all around! Easy to use and efficient. &quot; </p>

                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>

                                    <Image width={400} height={400} src="/client/04.jpg" className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                    <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="text-center">
                                <p className="text-xl text-slate-400 italic"> &quot; 11thUI made selling my home easy and stress free. They went above and beyond what is expected. &quot; </p>

                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>

                                    <Image width={400} height={400} src="/client/05.jpg" className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                    <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="text-center">
                                <p className="text-xl text-slate-400 italic"> &quot; 11thUI is fair priced, quick to respond, and easy to use. I highly recommend their services! &quot; </p>

                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>

                                    <Image width={400} height={400} src="/client/06.jpg" className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                    <h6 className="mt-2 fw-semibold">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default WhatOurClientSay