import { Skeleton } from "@nextui-org/react"

const SkeletonStats = () => {
    return (
        <section className="relative py-24 bg-default-50">
            <div className="max-w-7xl mx-auto w-full px-4 relative">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div className="lg:col-start-2 lg:col-span-10">
                        <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-10">

                            <Skeleton className="text-center rounded-xl">
                                <h1 className="lg:text-5xl text-4xl mb-2"><span>Properties</span></h1>
                                <h5 className="text-lg">Properties Sell</h5>
                            </Skeleton>

                            <Skeleton className="text-center rounded-xl">
                                <h1 className="lg:text-5xl text-4xl mb-2"><span>Award</span></h1>
                                <h5 className="text-lg">Award Gained</h5>
                            </Skeleton>

                            <Skeleton className="text-center rounded-xl">
                                <h1 className="lg:text-5xl text-4xl mb-2"><span>Experience</span></h1>
                                <h5 className="text-lg">Years Experience</h5>
                            </Skeleton>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkeletonStats