import { Skeleton } from '@nextui-org/react'
const SkeletonIntroVideo = () => {
    return (
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-5">
                    <div className="relative">
                        <Skeleton className="rounded-xl aspect-square"></Skeleton>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-4">
                        <Skeleton className="rounded-xl mb-6 md:text-3xl text-2xl">Efficiency. Transparency. Control.</Skeleton>
                        <Skeleton className="rounded-xl max-w-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, itaque quasi laboriosam quis aliquam ipsam enim! Possimus dolores ex vero, ab ipsum non, dignissimos accusamus architecto maxime voluptates nisi incidunt.</Skeleton>

                        <div className="mt-4">
                            <Skeleton className='w-20 rounded-lg'>Get Started</Skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonIntroVideo