import { Skeleton } from "@nextui-org/react";
const SkeletonGoogleMap = () => {
    return (
        <div className="container-fluid relative">
            <div className="grid grid-cols-1">
                <div className="w-full">
                    <Skeleton className="w-full h-[500px]"></Skeleton>
                </div>
            </div>
        </div>
    )
}

export default SkeletonGoogleMap