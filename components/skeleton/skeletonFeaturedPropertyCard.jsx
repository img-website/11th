import { Divider, Skeleton } from '@nextui-org/react'

const SkeletonFeaturedPropertyCard = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group rounded-xl flex flex-col overflow-hidden">
                <div className="relative">
                    <Skeleton className='w-full aspect-video' />

                    <div className="absolute top-4 end-4">
                        <div className='rounded-full size-7 p-1 bg-white dark:bg-default-50'></div>
                    </div>
                </div>

                <div className="p-6 grow flex flex-col">
                    <div className="pb-4 grow">
                        <Skeleton className="text-lg rounded-md">a</Skeleton>
                    </div>
                    <Divider className='opacity-35' />
                    <ul className="py-4 flex items-center list-none">
                        <li className="flex items-center me-4">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>

                        <li className="flex items-center me-4">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>

                        <li className="flex items-center">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>
                    </ul>
                    <Divider className='opacity-35' />

                    <ul className="pt-4 flex justify-between items-center list-none">
                        <li className='flex'>
                            <Skeleton className="text-lg rounded-md">₹PricePrice₹Price</Skeleton>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="group rounded-xl flex flex-col overflow-hidden">
                <div className="relative">
                    <Skeleton className='w-full aspect-video' />

                    <div className="absolute top-4 end-4">
                        <div className='rounded-full size-7 p-1 bg-white dark:bg-default-50'></div>
                    </div>
                </div>

                <div className="p-6 grow flex flex-col">
                    <div className="pb-4 grow">
                        <Skeleton className="text-lg rounded-md">a</Skeleton>
                    </div>
                    <Divider className='opacity-35' />
                    <ul className="py-4 flex items-center list-none">
                        <li className="flex items-center me-4">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>

                        <li className="flex items-center me-4">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>

                        <li className="flex items-center">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>
                    </ul>
                    <Divider className='opacity-35' />

                    <ul className="pt-4 flex justify-between items-center list-none">
                        <li className='flex'>
                            <Skeleton className="text-lg rounded-md">₹PricePrice₹Price</Skeleton>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="group rounded-xl flex flex-col overflow-hidden">
                <div className="relative">
                    <Skeleton className='w-full aspect-video' />

                    <div className="absolute top-4 end-4">
                        <div className='rounded-full size-7 p-1 bg-white dark:bg-default-50'></div>
                    </div>
                </div>

                <div className="p-6 grow flex flex-col">
                    <div className="pb-4 grow">
                        <Skeleton className="text-lg rounded-md">a</Skeleton>
                    </div>
                    <Divider className='opacity-35' />
                    <ul className="py-4 flex items-center list-none">
                        <li className="flex items-center me-4">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>

                        <li className="flex items-center me-4">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>

                        <li className="flex items-center">
                            <Skeleton className="size-6 me-2 rounded-md" />
                            <Skeleton className='rounded-md'>Bedrooms</Skeleton>
                        </li>
                    </ul>
                    <Divider className='opacity-35' />

                    <ul className="pt-4 flex justify-between items-center list-none">
                        <li className='flex'>
                            <Skeleton className="text-lg rounded-md">₹PricePrice₹Price</Skeleton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SkeletonFeaturedPropertyCard