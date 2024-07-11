import Fancybox from '@/components/Fancybox'
import { BathIcon, BedIcon, SqfIcon, EyeFilledIcon, SupportIcon, CheckCircleIcon } from '@/components/icons'
import { Button, Checkbox, Chip, Input, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const PropertyDetailPage = () => {
    const variants = ["flat", "bordered", "underlined", "faded"];

    return (
        <section className="relative pb-16">
            <div className="max-w-7xl mx-auto w-full px-4">
                <Fancybox
                    options={{
                        Carousel: {
                            infinite: false
                        }
                    }}
                >
                    <div className="flex flex-col">
                        <div className='flex'>
                        <div className="lg:w-4/6 md:w-1/2 p-1">
                            <div className="group rounded-lg relative overflow-hidden flex h-full">
                                <Image width={1000} height={1000} src="/property/single/1.jpg" alt="" />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <Button as={Link} href="/property/single/1.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/6 md:w-1/2">
                            <div className="flex flex-col">
                                <div className="w-full p-1">
                                    <div className="group rounded-lg relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/2.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/2.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-1">
                                    <div className="group rounded-lg relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/3.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/3.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

       
                        </div>
                            
                        </div>
                        <div className="flex ">
                                <div className="w-1/5 p-1">
                                    <div className="group rounded-lg relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/4.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/4.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/5 p-1">
                                    <div className="group rounded-lg relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/5.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/5.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/5 p-1">
                                    <div className="group rounded-lg relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/4.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/4.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/5 p-1">
                                    <div className="group rounded-lg relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/5.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/5.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/5 p-1">
                                    <div className="group rounded-lg relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/5.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/5.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Fancybox>
                <div className='flex items-center gap-2 mt-3'>
                    <button className='text-white bg-green-500 px-3 py-1 rounded-md text-sm'>Verified</button>
                    <button className='text-white bg-blue-500 px-3 py-1 rounded-md text-sm'>New</button>

                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 mt-8">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7">
                        <h4 className="text-2xl font-medium">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</h4>
                        <div className='dark:text-white text-slate-800 text-sm '>28 Jackson Ave Long Island City, NY 67234</div>
                        <ul className="py-6 flex items-center list-none">
                            <li className="flex items-center lg:me-6 me-4">
                                <SqfIcon className="size-4 me-2 text-green-600" />
                                <span className="lg:text-xl">8000sqf</span>
                            </li>

                            <li className="flex items-center lg:me-6 me-4">
                                <BedIcon className="size-4 me-2 text-green-600" />
                                <span className="lg:text-xl">4 Beds</span>
                            </li>

                            <li className="flex items-center">
                                <BathIcon className="size-4 me-2 text-green-600" />
                                <span className="lg:text-xl">4 Baths</span>
                            </li>
                        </ul>

                        <p className="text-slate-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <p className="text-slate-400 mt-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                        <p className="text-slate-400 mt-4">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                        <div className='pt-3'>
                            <h4 class="text-2xl font-medium">Property Details</h4>
                        </div>
                        <div>
                            <div class="info py-[15px]  px-0 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 border-b border-solid gap-3 border-b-[rgba(255,_255,_255,_0.1)]">
                                <div class="infoItem shrink-0 grow md:grow-0 flex flex-col flex-wrap overflow-hidden border border-solid border-gray/[0.5] rounded-lg text-center">
                                    <span class="text lg:mb-[5px] max-xl:flex text-xs md:text-sm leading-6 bold font-semibold opacity-100 dark:bg-gray-700 bg-gray-100 px-2 py-1">Type </span>
                                    <span class="text lg:mb-[5px] text-xs md:text-sm opacity-50 leading-6 font-semibold px-2">Apartment</span>
                                </div>
                                <div class="infoItem shrink-0 grow md:grow-0 flex flex-col flex-wrap overflow-hidden border border-solid border-gray/[0.5] rounded-lg text-center">
                                    <span class="text lg:mb-[5px] text-xs md:text-sm leading-6 bold font-semibold opacity-100 dark:bg-gray-700 bg-gray-100 px-2 py-1">Apartment area </span>
                                    <span class="text lg:mb-[5px] text-xs md:text-sm opacity-50 leading-6 font-semibold px-2">56 sq.m</span>
                                </div>
                                <div class="infoItem shrink-0 grow md:grow-0 flex flex-col flex-wrap overflow-hidden border border-solid border-gray/[0.5] rounded-lg text-center">
                                    <span class="text lg:mb-[5px] text-xs md:text-sm leading-6 bold font-semibold opacity-100 dark:bg-gray-700 bg-gray-100 px-2 py-1">Built </span>
                                    <span class="text lg:mb-[5px] text-xs md:text-sm opacity-50 leading-6 font-semibold px-2">2015</span>
                                </div>
                                <div class="infoItem shrink-0 grow md:grow-0 flex flex-col flex-wrap overflow-hidden border border-solid border-gray/[0.5] rounded-lg text-center">
                                    <span class="text lg:mb-[5px] text-xs md:text-sm leading-6 bold font-semibold opacity-100 dark:bg-gray-700 bg-gray-100 px-2 py-1">Bedrooms </span>
                                    <span class="text lg:mb-[5px] text-xs md:text-sm opacity-50 leading-6 font-semibold px-2">4</span>
                                </div>
                                <div class="infoItem shrink-0 grow md:grow-0 flex flex-col flex-wrap overflow-hidden border border-solid border-gray/[0.5] rounded-lg text-center">
                                    <span class="text lg:mb-[5px] text-xs md:text-sm leading-6 bold font-semibold opacity-100 dark:bg-gray-700 bg-gray-100 px-2 py-1">Bathrooms </span>
                                    <span class="text lg:mb-[5px] text-xs md:text-sm opacity-50 leading-6 font-semibold px-2">2</span>
                                </div>
                                <div class="infoItem shrink-0 grow md:grow-0 flex flex-col flex-wrap overflow-hidden border border-solid border-gray/[0.5] rounded-lg text-center">
                                    <span class="text lg:mb-[5px] text-xs md:text-sm leading-6 bold font-semibold opacity-100 dark:bg-gray-700 bg-gray-100 px-2 py-1">Parking places </span>
                                    <span class="text lg:mb-[5px] text-xs md:text-sm opacity-50 leading-6 font-semibold px-2">2</span>
                                </div>
                                <div class="infoItem shrink-0 grow md:grow-0 flex flex-col flex-wrap overflow-hidden border border-solid border-gray/[0.5] rounded-lg text-center">
                                    <span class="text lg:mb-[5px] text-xs md:text-sm leading-6 bold font-semibold opacity-100 dark:bg-gray-700 bg-gray-100 px-2 py-1">Pets allowed </span>
                                    <span class="text lg:mb-[5px] text-xs md:text-sm opacity-50 leading-6 font-semibold px-2">cats only</span>
                                </div>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <h4 class="text-2xl font-medium">Amenities</h4>
                        </div>
                        <div className="flex gap-2 flex-wrap my-3">
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                WiFi
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                Heating
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                Dishwasher
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                Parking place
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                Air conditioning
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                Iron
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                TV
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                Laundry
                            </Chip>
                            <Chip
                                startContent={<CheckCircleIcon className="size-4 text-success-500" />}
                                variant="faded"
                                color="default"
                            >
                                Security cameras
                            </Chip>

                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-10">
                            <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                                <div className="p-6">
                                    <h5 className="text-2xl font-medium">Price:</h5>

                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xl font-medium">$ 45,231</span>

                                        <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">For Sale</span>
                                    </div>

                                    <ul className="list-none mt-4">
                                        <li className="flex justify-between items-center">
                                            <span className="text-slate-400 text-sm">Days on 11thUI</span>
                                            <span className="font-medium text-sm">124 Days</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex px-6 pb-6">
                                    <div className="p-1 w-full flex items-center justify-center">
                                        <Button as={Link} href="" variant='solid' color='success' className="w-full inline-flex items-center justify-center font-bold text-white">Call Now</Button>
                                    </div>
                                  
                                </div>

                            </div>
                            <div className='mt-5 p-5 rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700'>
                                <div className='flex items-center justify-between'>
                                    <div className='overflow-hidden rounded-full'>
                                       <Image src="https://finder.createx.studio/img/avatars/22.jpg" alt="avtar" height={100} width={100} />
                                    </div>
                                    <div class="socialIcons flex items-center justify-center gap-2">
                                        <span class="icon size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer transition-all md:hover:shadow-sm md:hover:text-pink">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                        </span>
                                        <span class="icon size-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer transition-all md:hover:shadow-sm md:hover:text-pink">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className='md:text-2xl text-xl text-black dark:text-white font-bold'>jhon Kumar</div>
                                <div className='flex items-center gap-1 flex-wrap *:*:size-5 text-yellow-600'>
                                    <span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
                                    </span>
                                    <span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
                                    </span>
                                    <span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
                                    </span>
                                    <span>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
                                    </span>
                                    <span className='text-black dark:text-white'>
                                        (45 reviews)
                                    </span>

                                </div>
                                <a href='javascript:;' className='text-slate-800 dark:text-white sm:text-xl text-base'>Imperial Property Group Agent</a>
                                <div className='flex flex-col gap-1 mt-5 pb-5 border-b border-gray-200'>
                                    <a href='#' className='flex items-center gap-2 text-slate-700 dark:text-white/90 text-base'>
                                        <span >
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg>
                                        </span>
                                        (302) 555-0107
                                    </a>
                                    <a href='#' className='flex items-center gap-2 text-slate-700 dark:text-white/90 text-base'>
                                        <span >
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path></svg>
                                        </span>
                                        Demo_miles@email.com
                                    </a>
                                </div>
                                <div className='flex flex-col gap-3 mt-3'>
                                    <div className='w-full'>
                                        <Input 
                                            type="text" 
                                            variant="underlined" 
                                            label="Your name" 
                                            placeholder="Enter your Name" 
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Input 
                                            type="email" 
                                            variant="underlined" 
                                            label="Email" 
                                            placeholder="Enter your Email" 
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Input 
                                            type="number" 
                                            variant="underlined" 
                                            label="Number" 
                                            placeholder="Enter your number" 
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Input 
                                            type="date" 
                                            variant="underlined" 
                                            label="Choose Date" 
                                            placeholder="Choose Date" 
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            variant="underlined"
                                            label="Message"
                                            labelPlacement="outside"
                                            placeholder="Type Here."
                                            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                        />
                                    </div>
                                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Checkbox defaultSelected>Send news, tips and promos from Finder to my email.</Checkbox>
                                    </div>
                                    <div className="p-1 w-full flex items-center justify-center">
                                        <Button as={Link} href="" variant='solid' color='success' className="w-full inline-flex items-center justify-center font-bold text-white">Send Request</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full leading-[0] border-0 mt-5 relative h-52">
                                <div class='absolute rounded-md overflow-hidden z-10 inset-0 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr from-slate-900/10 via-slate-900/10 to-slate-900'>
                                    <Image src="https://finder.createx.studio/img/real-estate/single/map.jpg" alt="map" height={100} width={100} className='object-cover size-full overflow-hidden' />
                                </div> 
                                <div className='h-full w-full flex items-center justify-center relative z-10'>
                                <div className="p-1 w-full flex items-center justify-center">
                                        <Button as={Link} href="" variant='solid' color='success' className=" inline-flex items-center justify-center font-bold text-white">Get directions</Button>
                                    </div>
                                </div>
                            </div>
                            <div  class="text-slate-800 dark:text-white mt-3 text-sm text-center">28 Jackson Ave Long Island City, NY 67234</div>
                            
                            <div className="mt-5 text-center">
                                <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                                <div className="mt-6">
                                    <Button as={Link} href="" variant='ghost' color='default' startContent={<SupportIcon className="size-4" />}> Contact us</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyDetailPage