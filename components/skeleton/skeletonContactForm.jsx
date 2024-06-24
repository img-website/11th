import { Skeleton } from "@nextui-org/react"

const SkeletonContactForm = () => {
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto w-full px-4 relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-7 md:col-span-6 md:p-20">
                        <Skeleton className='size-full aspect-square rounded-lg'></Skeleton>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:me-5">
                            <div className="p-6">
                                <Skeleton className="mb-6 text-2xl leading-normal font-medium rounded-xl">Get in touch !</Skeleton>

                                <form>
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <Skeleton className="py-3 rounded-lg" />
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                        <Skeleton className="py-3 rounded-lg" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                        <Skeleton className="py-3 rounded-lg" />
                                        </div>

                                        <div className="mb-5">
                                        <Skeleton className="py-6 rounded-lg" />
                                        </div>
                                    </div>
                                    <Skeleton className="w-24 h-10 rounded-lg">Send Message</Skeleton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkeletonContactForm