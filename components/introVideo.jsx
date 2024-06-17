import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PlayIcon } from '@/components/icons'
import { Button } from '@nextui-org/react'
import Fancybox from "@/components/Fancybox"


const IntroVideo = () => {
    return (
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-5">
                    <div className="relative">
                        <Image width={1200} height={600} src="/about.jpg" className="rounded-xl shadow-md" alt="" />
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false
                                }
                            }}
                        >
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link data-fancybox="gallery" href="https://vimeo.com/115041822" className="glightbox2 size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <PlayIcon />
                                </Link>
                            </div>
                        </Fancybox>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-4">
                        <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Efficiency. Transparency. <br /> Control.</h4>
                        <p className="text-slate-400 max-w-xl">11thUI developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. 11thUI is Real Estate Redefined.</p>

                        <div className="mt-4">
                            <Button as={Link} href="" variant='bordered'>Learn More </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroVideo