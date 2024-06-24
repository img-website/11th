"use client"
import { Card, CardBody } from '@nextui-org/card'
import { Tab, Tabs } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const Steps = () => {
    return (
        <div className="max-w-7xl mx-auto w-full px-4 relative py-16">

            <div className="flex w-full flex-col">
                <Tabs
                    aria-label="Options"
                    isVertical
                    classNames={{
                        base: "base-classess lg:col-span-4 md:col-span-5",
                        tabList: "tabList-classess text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md sticky top-12 w-full",
                        tab: "tab-classess",
                        tabContent: "tabContent-classess text-black dark:text-white font-semibold",
                        cursor: "cursor-classess",
                        panel: "panel-classess lg:col-span-8 md:col-span-7",
                        wrapper: "wrapper-classess grid md:grid-cols-12 grid-cols-1 gap-[30px]",
                    }}
                >
                    <Tab key="PreApprovalLetter" title="Pre Approval Letter">
                        <Image width="800" height="800" className='max-w-64 max-md:mx-auto' src="/svg/Agent_Monochromatic.svg" alt="" />
                        <div className="mt-6 max-md:text-center">
                            <h5 className="font-medium text-xl">Pre Approval Letter</h5>
                            <p className="text-slate-400 mt-3">Most buyers think the first step is finding their dream house, but the truth is finding the funding is the first step. 11thUI streamlines the Loan Pre-Approval process with our ecosystem of Premier Partners or simply upload your own Pre-Approval letter.</p>
                        </div>
                    </Tab>
                    <Tab key="ScheduleShowing" title="Schedule a Showing">
                        <Image width="800" height="800" className='max-w-64 max-md:mx-auto' src="/svg/presentation_Flatline.svg" alt="" />
                        <div className="mt-6 max-md:text-center">
                            <h5 className="font-medium text-xl">Schedule a Showing</h5>
                            <p className="text-slate-400 mt-3">11thUI allows a buyer to schedule an instant showing and gain a private viewing without the need for multiple parties to be involved. You pick the time that works for you!</p>
                        </div>
                    </Tab>
                    <Tab key="SubmitanOffer" title="Submit an Offer">
                        <Image width="800" height="800" className='max-w-64 max-md:mx-auto' src="/svg/session_Flatline.svg" alt="" />
                        <div className="mt-6 max-md:text-center">
                            <h5 className="font-medium text-xl">Submit an Offer</h5>
                            <p className="text-slate-400 mt-3">11thUI walks a buyer through the purchase agreement process making the paperwork appear effortless. With our custom workflows and progress analytics, you will always know where your purchase stands. No more phone tag and unreturned emails!</p>
                        </div>
                    </Tab>
                    <Tab key="PropertyInspection" title="Property Inspection">
                        <Image width="800" height="800" className='max-w-64 max-md:mx-auto' src="/svg/Startup_Flatline.svg" alt="" />
                        <div className="mt-6 max-md:text-center">
                            <h5 className="font-medium text-xl">Property Inspection</h5>
                            <p className="text-slate-400 mt-3">No one wants to buy a lemon. Book an inspection with a licensed inspector, then submit the repair requests all via the 11thUI platform.</p>
                        </div>
                    </Tab>
                    <Tab key="Appraisal" title="Appraisal">
                        <Image width="800" height="800" className='max-w-64 max-md:mx-auto' src="/svg/team_Flatline.svg" alt="" />
                        <div className="mt-6 max-md:text-center">
                            <h5 className="font-medium text-xl">Appraisal</h5>
                            <p className="text-slate-400 mt-3">11thUI monitors the appraisal process ensuring the home you are purchasing meets or exceeds the price you are paying.</p>
                        </div>
                    </Tab>
                    <Tab key="ClosingDeal" title="Closing Deal">
                        <Image width="800" height="800" className='max-w-64 max-md:mx-auto' src="/svg/Team_meeting_Two.svg" alt="" />
                        <div className="mt-6 max-md:text-center">
                            <h5 className="font-medium text-xl">Closing Deal</h5>
                            <p className="text-slate-400 mt-3">Finally the closing packet is sent to the Title office, and the day has come… You have 11thUI the home of your dreams!</p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Steps