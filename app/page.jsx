import React, { Suspense } from 'react';
import HomeSwiper from '@/components/homeSwiper';
import FeaturedProperties from '@/components/featuredProperties';
import HowItWork from '@/components/howItWork';
import IntroVideo from '@/components/introVideo';
import WhatOurClientSay from '@/components/whatOurClientSay';
import HaveQuestion from '@/components/haveQuestion';
import SkeletonHomeSwiper from '@/components/skeleton/skeletonHomeSwiper';
import SkeletonHowItWork from '@/components/skeleton/skeletonHowItWork';

export default function Home() {
    return (
        <>
            <Suspense fallback={<SkeletonHomeSwiper />}>
                <HomeSwiper />
            </Suspense>
            <Suspense fallback={"Loading FeaturedProperties..."}>
                <FeaturedProperties />
            </Suspense>
            <Suspense fallback={<SkeletonHowItWork />}>
                <HowItWork />
            </Suspense>
            <Suspense fallback={"Loading IntroVideo..."}>
                <IntroVideo />
            </Suspense>
            <Suspense fallback={"Loading HaveQuestion..."}>
                <HaveQuestion />
            </Suspense>
            <Suspense fallback={"Loading WhatOurClientSay..."}>
                <WhatOurClientSay />
            </Suspense>
        </>
    );
}
