import { Skeleton } from "@nextui-org/react"

const SkeletonContactStats = () => {
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto w-full px-4 relative py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    <div className="text-center px-6">
                        <div className="relative -m-3">
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto flex align-middle justify-center items-center">
                                <Skeleton className="size-16 rounded-full mb-5" />
                            </div>
                        </div>

                        <div className="content mt-7 text-center flex flex-col">
                            <Skeleton className="title h5 text-xl mx-auto">xxxx xxxxxxxxx</Skeleton>
                            <Skeleton className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam possimus dicta! Aspernatur eveniet consectetur iste mollitia</Skeleton>

                            <div className="mt-5 flex flex-col items-center">
                                <Skeleton>0934534533</Skeleton>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative -m-3">
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto flex align-middle justify-center items-center">
                                <Skeleton className="size-16 rounded-full mb-5" />
                            </div>
                        </div>

                        <div className="content mt-7 text-center flex flex-col">
                            <Skeleton className="title h5 text-xl mx-auto">xxxx xxxxxxxxx</Skeleton>
                            <Skeleton className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam possimus dicta! Aspernatur eveniet consectetur iste mollitia</Skeleton>

                            <div className="mt-5 flex flex-col items-center">
                                <Skeleton>0934534533</Skeleton>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative -m-3">
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto flex align-middle justify-center items-center">
                                <Skeleton className="size-16 rounded-full mb-5" />
                            </div>
                        </div>

                        <div className="content mt-7 text-center flex flex-col">
                            <Skeleton className="title h5 text-xl mx-auto">xxxx xxxxxxxxx</Skeleton>
                            <Skeleton className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam possimus dicta! Aspernatur eveniet consectetur iste mollitia</Skeleton>

                            <div className="mt-5 flex flex-col items-center">
                                <Skeleton>0934534533</Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkeletonContactStats