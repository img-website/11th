import Agents from '@/components/agents'
import HaveQuestion from '@/components/haveQuestion'
import HowItWork from '@/components/howItWork'
import IntroVideo from '@/components/introVideo'
import Stats from '@/components/stats'
import WhatOurClientSay from '@/components/whatOurClientSay'
import React, { Suspense } from 'react'

const AboutUsPage = () => {
    return (
        <>

            <section className="relative table w-full py-32 lg:py-36 bg-[url('/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="max-w-7xl mx-auto w-full px-4 relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="absolute inset-x-0 -bottom-[1px] overflow-hidden z-1 text-white dark:text-black">
                    <svg viewBox="0 0 2880 48" fill="none" className='w-full h-auto scale-[2] origin-top' xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <Suspense fallback={"IntroVideo Loading..."}>
                <IntroVideo />
            </Suspense>

            <Suspense fallback={"HowItWork Loading..."}>
                <HowItWork />
            </Suspense>

            <Suspense fallback={"Stats Loading..."}>
                <Stats />
            </Suspense>

            <Suspense fallback={"Agents Loading..."}>
                <Agents />
            </Suspense>

            <Suspense fallback={"WhatOurClientSay Loading..."}>
                <WhatOurClientSay />
            </Suspense>

            <Suspense fallback={"HaveQuestion Loading..."}>
                <div className='pb-16'>
                    <HaveQuestion />
                </div>
            </Suspense>
        </>
    )
}

export default AboutUsPage