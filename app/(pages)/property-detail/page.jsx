import Fancybox from '@/components/Fancybox'
import { BathIcon, BedIcon, SqfIcon, EyeFilledIcon, SupportIcon } from '@/components/icons'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PropertyDetailPage = () => {
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
                    <div className="md:flex">
                        <div className="lg:w-1/2 md:w-1/2 p-1">
                            <div className="group relative overflow-hidden flex">
                                <Image width={1000} height={1000} src="/property/single/1.jpg" alt="" />
                                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                    <Button as={Link} href="/property/single/1.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 md:w-1/2">
                            <div className="flex">
                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/2.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/2.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/3.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/3.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/4.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/4.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/2 p-1">
                                    <div className="group relative overflow-hidden flex">
                                        <Image width={1000} height={1000} src="/property/single/5.jpg" alt="" />
                                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                            <Button as={Link} href="/property/single/5.jpg" variant="ghost" color='danger' data-fancybox="gallery" className="text-white rounded-full inline-flex items-center justify-center min-w-0 !size-10 p-0"><EyeFilledIcon className="size-6" /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fancybox>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 mt-8">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7">
                        <h4 className="text-2xl font-medium">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</h4>

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

                        <div className="w-full leading-[0] border-0 mt-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19866476.657981362!2d31.22717366905068!3d24.91228714136436!2m3!1f6.591667662262531!2f0!3f0!3m2!1i1024!2i768!4f59.99999999999999!3m3!1m2!1s0x396c6ebc845052b1%3A0x1973d280bedda957!2z4KSu4KS54KS-4KS14KWA4KSwIOCkleCkv-CksOCkvuCko-CkviDgpLjgpY3gpJ_gpYvgpLA!5e1!3m2!1sen!2sin!4v1718360429340!5m2!1sen!2sin" width="600" height="450" className="w-full h-[500px] border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

                                        <li className="flex justify-between items-center mt-2">
                                            <span className="text-slate-400 text-sm">Price per sq ft</span>
                                            <span className="font-medium text-sm">$ 186</span>
                                        </li>

                                        <li className="flex justify-between items-center mt-2">
                                            <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                            <span className="font-medium text-sm">$ 1497/Monthly</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex px-6 pb-6">
                                    <div className="p-1 w-1/2">
                                        <Button as={Link} href="" variant='solid' color='success' className="w-full font-bold text-white">Book Now</Button>
                                    </div>
                                    <div className="p-1 w-1/2">
                                        <Button as={Link} href="" variant='solid' color='success' className="w-full font-bold text-white">Offer Now</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
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