import BuyerBenefits from '@/components/buyerBenefits'
import FeaturedPropertyCard from '@/components/featuredPropertyCard'
import HaveQuestion from '@/components/haveQuestion'
import { SearchIcon } from '@/components/icons'
import { Button, Card, CardBody, Input, Tab, Tabs } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'

const PropertyPage = () => {
    return (
        <>
            <section className="relative table w-full py-24 bg-[url('/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="max-w-7xl mx-auto w-full px-4 relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white pb-5">Find Your Dream Home</h3>
                        <p className="text-slate-200 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="absolute inset-x-0 -bottom-[1px] overflow-hidden z-1 text-white dark:text-black">
                    <svg viewBox="0 0 2880 48" fill="none" className='w-full h-auto scale-[2] origin-top' xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 relative -mt-[25px]">
                <div className="grid grid-cols-1">
                    <div className="subcribe-form z-1">
                        <form className="relative max-w-2xl mx-auto">
                            <i data-feather="search" className="size-5 absolute top-[47%] -translate-y-1/2 start-4"></i>
                            <Input
                                variant='bordered'
                                type="search"
                                id="search"
                                name="search"
                                classNames={{
                                    base: "base-classes",
                                    label: "label-classes",
                                    mainWrapper: "main-wrapper-classes",
                                    inputWrapper: "input-wrapper-classes bg-default-50 h-16",
                                    innerWrapper: "inner-wrapper-classes",
                                    input: "input-classes font-bold",
                                    clearButton: "clear-button-classes",
                                    helperWrapper: "helper-wrapper-classes",
                                    description: "description-classes",
                                    errorMessage: "error-message-classes",
                                }}
                                startContent={<SearchIcon className="size-5" />}
                                endContent={
                                    <Button type='submit' variant='solid' color='default' className='font-semibold'>Search</Button>
                                }
                                placeholder="City, Address, Zip :"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="max-w-7xl mx-auto w-full px-4 relative">

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        <FeaturedPropertyCard />
                        <FeaturedPropertyCard />
                        <FeaturedPropertyCard />
                        <FeaturedPropertyCard />
                        <FeaturedPropertyCard />
                        <FeaturedPropertyCard />
                    </div>

                    <div className="md:flex justify-center text-center mt-6">
                        <div className="md:w-full">
                            <Button as={Link} variant='bordered' color='default' href="" className="">View More Properties <i className="uil uil-arrow-right ms-1"></i></Button>
                        </div>
                    </div>
                </div>

                <Suspense fallback={"Loading..."} >
                    <BuyerBenefits />
                </Suspense>

                <div className="max-w-7xl mx-auto w-full px-4 relative py-16">

                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Options">
                            <Tab key="photos" title="Photos">
                                <Card>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="music" title="Music">
                                <Card>
                                    <CardBody>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="videos" title="Videos">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="sticky top-12">
                                <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                    <li>
                                        <button className="px-4 py-2 text-base font-medium rounded-md w-full text-white hover:text-green-600 transition-all duration-500 ease-in-out">Pre Approval Letter</button>
                                    </li>
                                    <li>
                                        <button className="px-4 py-2 text-base font-medium rounded-md w-full text-white mt-3 transition-all duration-500 ease-in-out">Schedule a Showing</button>
                                    </li>
                                    <li>
                                        <button className="px-4 py-2 text-base font-medium rounded-md w-full text-white mt-3 transition-all duration-500 ease-in-out">Submit an Offer</button>
                                    </li>
                                    <li>
                                        <button className="px-4 py-2 text-base font-medium rounded-md w-full text-white mt-3 transition-all duration-500 ease-in-out">Property Inspection</button>
                                    </li>
                                    <li>
                                        <button className="px-4 py-2 text-base font-medium rounded-md w-full text-white mt-3 transition-all duration-500 ease-in-out">Appraisal</button>
                                    </li>
                                    <li>
                                        <button className="px-4 py-2 text-base font-medium rounded-md w-full text-white mt-3 transition-all duration-500 ease-in-out">Closing Deal</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div>
                                <div className="">
                                    <Image width="800" height="800" className='max-w-64' src="/svg/Agent_Monochromatic.svg" alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Pre Approval Letter</h5>
                                        <p className="text-slate-400 mt-3">Most buyers think the first step is finding their dream house, but the truth is finding the funding is the first step. 11thUI streamlines the Loan Pre-Approval process with our ecosystem of Premier Partners or simply upload your own Pre-Approval letter.</p>
                                    </div>
                                </div>
                                <div className="hidden">
                                    <Image width="800" height="800" className='max-w-64' src="/svg/presentation_Flatline.svg" alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Schedule a Showing</h5>
                                        <p className="text-slate-400 mt-3">11thUI allows a buyer to schedule an instant showing and gain a private viewing without the need for multiple parties to be involved. You pick the time that works for you!</p>
                                    </div>
                                </div>
                                <div className="hidden">
                                    <Image width="800" height="800" className='max-w-64' src="/svg/session_Flatline.svg" alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Submit an Offer</h5>
                                        <p className="text-slate-400 mt-3">11thUI walks a buyer through the purchase agreement process making the paperwork appear effortless. With our custom workflows and progress analytics, you will always know where your purchase stands. No more phone tag and unreturned emails!</p>
                                    </div>
                                </div>
                                <div className="hidden">
                                    <Image width="800" height="800" className='max-w-64' src="/svg/Startup_Flatline.svg" alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Property Inspection</h5>
                                        <p className="text-slate-400 mt-3">No one wants to buy a lemon. Book an inspection with a licensed inspector, then submit the repair requests all via the 11thUI platform.</p>
                                    </div>
                                </div>
                                <div className="hidden">
                                    <Image width="800" height="800" className='max-w-64' src="/svg/team_Flatline.svg" alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Appraisal</h5>
                                        <p className="text-slate-400 mt-3">11thUI monitors the appraisal process ensuring the home you are purchasing meets or exceeds the price you are paying.</p>
                                    </div>
                                </div>
                                <div className="hidden">
                                    <Image width="800" height="800" className='max-w-64' src="/svg/Team_meeting_Two.svg" alt="" />
                                    <div className="mt-6">
                                        <h5 className="font-medium text-xl">Closing Deal</h5>
                                        <p className="text-slate-400 mt-3">Finally the closing packet is sent to the Title office, and the day has come… You have 11thUI the home of your dreams!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HaveQuestion />
            </section>
        </>
    )
}

export default PropertyPage