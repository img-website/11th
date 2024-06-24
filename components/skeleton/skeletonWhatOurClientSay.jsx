import { Skeleton } from "@nextui-org/react"

const SkeletonWhatOurClientSay = () => {
    return (
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
            <div className="grid grid-cols-1 text-center">
                <Skeleton className="mb-4 md:text-3xl md:leading-normal text-2xl max-w-96 mx-auto rounded-xl">What Our Client Say ?</Skeleton>

                <Skeleton className="max-w-xl mx-auto rounded-lg">A great plateform to buy, sell and rent your properties without any agent or commisions.</Skeleton>
            </div>

            <div className="flex justify-center relative pt-16 px-4">
                <div className="relative lg:w-1/3 md:w-1/2 w-full">
                    <div className="w-full">
                            <div>
                                <div className="text-center">
                                    <Skeleton className="text-xl rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aspernatur dolore repudiandae sed a error fugiat nisi voluptatibus aperiam, libero autem, vitae, assumenda voluptatem quibusdam blanditiis esse veniam? In, ab.</Skeleton>

                                    <div className="text-center mt-5">
                                        <Skeleton className="size-14 rounded-full mx-auto"></Skeleton>
                                        <Skeleton className="mt-2 rounded-lg max-w-28 mx-auto">John Doe</Skeleton>
                                        <Skeleton className="rounded-lg mt-1 max-w-32 mx-auto">Team Leader</Skeleton>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonWhatOurClientSay