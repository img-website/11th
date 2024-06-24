import { Card, Skeleton } from "@nextui-org/react"

const SkeletonHomeSwiper = () => {
    return (
        <div className="w-full">
            <div>
                <div className="relative">
                    <div className="container-fluid md:mx-4 mx-2">
                        <Skeleton as={Card} className="relative pt-40 pb-52 table w-full rounded-2xl overflow-hidden min-h-[calc(100dvh-150px)]">
                        </Skeleton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonHomeSwiper