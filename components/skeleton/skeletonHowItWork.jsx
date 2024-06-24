import { Skeleton } from '@nextui-org/react';
const SkeletonHowItWork = () => {
    return (
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
            <div className="grid grid-cols-1 pb-8 text-center">
                <Skeleton className="mb-4 md:text-3xl text-2xl rounded-xl">How It Works</Skeleton>

                <Skeleton className="max-w-xl mx-auto rounded-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</Skeleton>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <Skeleton className="group relative lg:px-10 rounded-xl overflow-hidden text-center">
                    <div className="relative overflow-hidden -m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-32 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto rounded-xl text-4xl md:text-6xl flex align-middle justify-center items-center">
                            1
                        </div>
                    </div>

                    <div className="mt-6">
                        <h5 className="text-xl">Evaluate Property</h5>
                        <p className="mt-3">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                    </div>
                </Skeleton>
                <Skeleton className="group relative lg:px-10 rounded-xl overflow-hidden text-center">
                    <div className="relative overflow-hidden -m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-32 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto rounded-xl text-4xl md:text-6xl flex align-middle justify-center items-center">
                            1
                        </div>
                    </div>

                    <div className="mt-6">
                        <h5 className="text-xl">Evaluate Property</h5>
                        <p className="mt-3">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                    </div>
                </Skeleton>
                <Skeleton className="group relative lg:px-10 rounded-xl overflow-hidden text-center">
                    <div className="relative overflow-hidden -m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-32 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto rounded-xl text-4xl md:text-6xl flex align-middle justify-center items-center">
                            1
                        </div>
                    </div>

                    <div className="mt-6">
                        <h5 className="text-xl">Evaluate Property</h5>
                        <p className="mt-3">If the distribution of letters and &apos;words&apos; is random, the reader will not be distracted from making.</p>
                    </div>
                </Skeleton>
            </div>
        </div>
    )
}

export default SkeletonHowItWork