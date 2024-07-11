import React from 'react'
import { BathIcon, BedIcon, HeartFilledIcon, SqfIcon } from '@/components/icons'
import Image from 'next/image'
import { Button, Card, Divider } from '@nextui-org/react'
import Link from 'next/link'

const FeaturedPropertyCard = ({item}) => {
    return (
        <Card className="group rounded-xl bg-white flex flex-col dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
            <div className="relative">
                <Image width={400} height={300} className='w-full object-cover aspect-video' src={item?.banner} alt={item?.title} />

                <div className="absolute top-4 end-4">
                    <Button as={Link} className='rounded-full min-w-0 h-auto p-1' href="" variant="ghost" color='danger'><HeartFilledIcon /></Button>
                </div>
            </div>

            <div className="p-6 grow flex flex-col">
                <div className="pb-4 grow">
                    <Link href="/property-detail" className="text-lg hover:text-green-600 line-clamp-2 font-medium ease-in-out duration-500">{item?.id}</Link>
                </div>
                <Divider className='opacity-35' />
                <ul className="flex items-center list-none">
                    <li className="flex items-center me-4">
                        <SqfIcon className="size-4 me-2 text-green-600" />
                        <span>{item?.property_details?.apartment_area}sqf</span>
                    </li>

                    <li className="flex items-center me-4">
                        <BedIcon className="size-4 me-2 text-green-600" />
                        <span>{item?.property_details?.bedrooms} Bedrooms</span>
                    </li>

                    <li className="flex items-center">
                        <BathIcon className="size-4 me-2 text-green-600" />
                        <span>{item?.property_details?.bathrooms} Bath</span>
                    </li>
                </ul>
                <Divider className='opacity-35' />

                <ul className="pt-4 flex justify-between items-center list-none">
                    <li>
                        <span className="text-slate-400">Price</span>
                        <p className="text-lg font-medium">₹{item?.sale_price}</p>
                    </li>

                    {/* <li>
                        <span className="text-slate-400">Rating</span>
                        <ul className="text-lg font-medium text-amber-400 list-none">
                            <li className="inline"><i className="mdi mdi-star"></i></li>
                            <li className="inline"><i className="mdi mdi-star"></i></li>
                            <li className="inline"><i className="mdi mdi-star"></i></li>
                            <li className="inline"><i className="mdi mdi-star"></i></li>
                            <li className="inline"><i className="mdi mdi-star"></i></li>
                            <li className="inline text-black dark:text-white">5.0(30)</li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </Card>
    )
}

export default FeaturedPropertyCard