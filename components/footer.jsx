import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, EmailIcon, FacebookIcon, HeartFilledIcon, InstagramIcon, MapPinIcon, PhoneIcon, TelegramIcon } from '@/components/icons'
import { Button } from '@nextui-org/react'

const FooterSection = () => {
    return (
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="max-w-7xl mx-auto w-full px-4 relative">
                <div className="grid grid-cols-1">
                    <div className="relative py-16">
                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="lg:col-span-4 md:col-span-12">
                                    <Link href="" className="text-[22px] focus:outline-none">
                                        <Image priority width={100} height={100} src="/logo-light.png" alt="" />
                                    </Link>
                                    <p className="mt-6 text-gray-300">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                                </div>

                                <div className="lg:col-span-2 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                    <ul className="list-none footer-list mt-6">
                                        <li><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> About us</Link></li>
                                        <li className="mt-[10px]"><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Services</Link></li>
                                        <li className="mt-[10px]"><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Pricing</Link></li>
                                        <li className="mt-[10px]"><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Blog</Link></li>
                                        <li className="mt-[10px]"><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Login</Link></li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Usefull Links</h5>
                                    <ul className="list-none footer-list mt-6">
                                        <li><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Terms of Services</Link></li>
                                        <li className="mt-[10px]"><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Privacy Policy</Link></li>
                                        <li className="mt-[10px]"><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Listing</Link></li>
                                        <li className="mt-[10px]"><Link href="" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3"><ArrowRightIcon className="size-3 inline" /> Contact</Link></li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Contact Details</h5>


                                    <div className="flex mt-6">
                                        <MapPinIcon className="size-5 text-green-600 me-3"></MapPinIcon>
                                        <div className="">
                                            <h6 className="text-gray-300 mb-2">C/54 Northwest Freeway, <br /> Suite 558, <br /> Houston, USA 485</h6>
                                                <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox">View on Google map</Link>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <EmailIcon className="size-5 text-green-600 me-3"></EmailIcon>
                                            <div className="">
                                                <Link href="mailto:contact@example.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3">contact@example.com</Link>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <PhoneIcon className="size-5 text-green-600 me-3"></PhoneIcon>
                                            <div className="">
                                                <Link href="tel:+152534-468-854" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center gap-3">+152 534-468-854</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto w-full relative text-center">
                        <div className="grid md:grid-cols-2 items-center gap-6">
                            <div className="md:text-start text-center">
                                <p className="mb-0 text-gray-300">© <script>2024</script> 11thUI. Design with <HeartFilledIcon className="size-5 inline text-red-600" /> by <Link href="" target="_blank" className="text-reset">ElevanthUI</Link>.</p>
                            </div>

                            <ul className="list-none md:text-end text-center">
                                <li className="inline"><Button as={Link} href="" target="_blank" className="min-w-0 p-2 h-auto mx-1"><FacebookIcon className="size-4" /></Button></li>
                                <li className="inline"><Button as={Link} href="" target="_blank" className="min-w-0 p-2 h-auto mx-1"><InstagramIcon className="size-4" /></Button></li>
                                <li className="inline"><Button as={Link} href="" target="_blank" className="min-w-0 p-2 h-auto mx-1"><TelegramIcon className="size-4" /></Button></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default FooterSection