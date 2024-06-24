import { Skeleton } from '@nextui-org/react'
const SkeletonHaveQuestion = () => {
    return (
        <Skeleton className="max-w-7xl mx-auto w-full relative py-16 px-4 bg-default-50 md:rounded-xl">
            <div className="grid grid-cols-1 text-center">
                <div className="mb-6 md:text-3xl text-2xl">Hello Contact</div>

                <div className="max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil illo dolore consectetur error. Fugiat nisi dolor fugit </div>

                <div className="mt-6">
                    <div>Support</div>
                </div>
            </div>
        </Skeleton>
    )
}

export default SkeletonHaveQuestion
