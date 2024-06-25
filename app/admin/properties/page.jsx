"use client"
import React from 'react'

import { Checkbox, Input, Radio, RadioGroup, Select, SelectItem, Textarea, Button, Progress  } from "@nextui-org/react";

const Category = [
    { sale: "for sale", label: "For Sale" },
    { key: "for Rant", label: "For Rant" },

];
const PropertyType = [
    { sale: "Apartment", label: "Apartment" },
    { key: "Houset", label: "House" },
    { key: "Commercial", label: "Commercial" },
    { key: "Daily rental", label: "Daily rental" },
    { key: "New building", label: "New building" },

];
const country = [
    { sale: "Australia", label: "Australia" },
    { key: "Belgium", label: "Belgium" },
    { key: "Canada", label: "Canada" },
    { key: "Germany", label: "Germany" },
    { key: "United States", label: "United States" },

];
const city = [
    { sale: "Chicago", label: "Chicago" },
    { key: "Dallas", label: "Dallas" },
    { key: "Los Angeles", label: "Los Angeles" },
    { key: "New York", label: "New York" },
    { key: "San Diego", label: "San Diego" },

];
const district = [
    { sale: "Brooklyn", label: "Brooklyn" },
    { key: "Manhattan", label: "Manhattan" },
    { key: "Staten Island", label: "Staten Island" },
    { key: "The Bronx", label: "The Bronx" },
    { key: "Queens", label: "Queens" },

];
const bedrooms = [
    { sale: "one bedroom", label: "one bedroom" },
    { key: "Two bedrooms", label: "Two bedrooms" },
    { key: "Three bedrooms", label: "Three bedrooms" },

];
const bathrooms = [
    { sale: "one Bathroom", label: "one Bathroom" },
    { key: "Two Bathrooms", label: "Two Bathrooms" },
    { key: "Three Bathrooms", label: "Three Bathrooms" },

];
const parkingspots = [
    { sale: "one Parking", label: "one Parking" },
    { key: "Two Parking", label: "Two Parking" },
    { key: "Three Parking", label: "Three Parking" },

];


const PropertiesPage = () => {

    return (
        <>
            <div className='relative bg-gray-50 dark:bg-black'>
                <div className='max-w-7xl mx-auto w-full px-4 relative py-10'>
                    <div className='flex flex-wrap md:gap-0 gap-5'>
                        <div className='md:w-7/12 w-full md:pe-4'>
                            <div className='text-black font-bold text-4xl dark:text-white'> Add property</div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></span> Basic info</div>
                                <form >
                                    <div>
                                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                            <div className='w-full'>
                                                <Input
                                                    type="text"
                                                    isRequired
                                                    variant="underlined"
                                                    label="Title"
                                                    placeholder="Pine Apartments"
                                                    validationBehavior="native"
                                                />
                                            </div>
                                            <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">

                                                <Select
                                                    variant="underlined"
                                                    label="Category "
                                                    placeholder="For Sale"
                                                    isRequired
                                                    validationBehavior="native"
                                                    className=""
                                                >
                                                    {Category.map((animal) => (
                                                        <SelectItem key={animal.key}>
                                                            {animal.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                                <Select
                                                    variant="underlined"
                                                    label="Property type  "
                                                    placeholder="Choose property type"
                                                    isRequired
                                                    validationBehavior="native"
                                                    className=""
                                                >
                                                    {PropertyType.map((property) => (
                                                        <SelectItem key={property.key}>
                                                            {property.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                            </div>

                                            <div className='flex w-full flex-wrap flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
                                                <div className='text-black text-lg dark:text-white'>Are you listing on Finder as part of a company?</div>
                                                <div className="flex gap-4">
                                                    <RadioGroup>
                                                        <Radio value="I am a registered business">I am a registered business</Radio>
                                                        <Radio value="I am a private seller">I am a private seller</Radio>
                                                    </RadioGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span> Location</div>
                                <form >
                                    <div>
                                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                            <div className="w-full flex flex-col gap-4">
                                                <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                    <Select
                                                        variant="underlined"
                                                        label="Country / region "
                                                        placeholder="Choose country"
                                                        isRequired
                                                        validationBehavior="native"
                                                        className=""
                                                    >
                                                        {country.map((countryRegion) => (
                                                            <SelectItem key={countryRegion.key}>
                                                                {countryRegion.label}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                    <Select
                                                        variant="underlined"
                                                        label="City"
                                                        placeholder="Choose city"
                                                        isRequired
                                                        validationBehavior="native"
                                                        className=""
                                                    >
                                                        {city.map((cityall) => (
                                                            <SelectItem key={cityall.key}>
                                                                {cityall.label}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-wrap g-4">
                                                <div className='w-7/12 pe-4'>
                                                    <Select
                                                        variant="underlined"
                                                        label="District"
                                                        placeholder="Choose district "
                                                        isRequired
                                                        validationBehavior="native"
                                                        className=""
                                                    >
                                                        {district.map((city) => (
                                                            <SelectItem key={city.key}>
                                                                {city.label}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                </div>
                                                <div className='w-5/12 ps-4'>
                                                    <Input
                                                        type="text"
                                                        isRequired
                                                        variant="underlined"
                                                        label="Zip code"
                                                        placeholder="Enter Zip code"
                                                        validationBehavior="native"
                                                    />
                                                </div>

                                            </div>
                                            <div className='flex w-full flex-wrap flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
                                                <Input
                                                    type="text"
                                                    variant="underlined"
                                                    label="Street address "
                                                    placeholder="28 Jackson Avenuewww"
                                                    isRequired
                                                    validationBehavior="native"
                                                />

                                            </div>
                                            <div className='text-black text-lg dark:text-white'>Display on the map</div>

                                            <div className='overflow-hidden rounded-md'>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6163172662423!2d75.74075887450383!3d26.88392866132861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db504348b0293%3A0xf47386bb904f0c14!2sKurki%20House!5e0!3m2!1sen!2sin!4v1719228171283!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></span> Property details</div>
                                <form >
                                    <div>
                                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                            <div className="w-full flex flex-col gap-4">
                                                <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                    <Input
                                                        type="number"
                                                        variant="underlined"
                                                        label="Total area, sq.m "
                                                        placeholder="2"
                                                        isRequired
                                                        validationBehavior="native"
                                                    />
                                                    <Select
                                                        variant="underlined"
                                                        label="Bedrooms"
                                                        placeholder="Choose Bedrooms"
                                                        isRequired
                                                        validationBehavior="native"
                                                        className=""
                                                    >
                                                        {bedrooms.map((rooms) => (
                                                            <SelectItem key={rooms.key}>
                                                                {rooms.label}
                                                            </SelectItem>
                                                        ))}
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                <Select
                                                    variant="underlined"
                                                    label="Bathrooms"
                                                    placeholder="Choose Bathrooms "
                                                    isRequired
                                                    validationBehavior="native"
                                                    className=""
                                                >
                                                    {bathrooms.map((Bathroom) => (
                                                        <SelectItem key={Bathroom.key}>
                                                            {Bathroom.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                                <Select
                                                    variant="underlined"
                                                    label="Parking spots"
                                                    placeholder="Choose Parking spots "
                                                    isRequired
                                                    validationBehavior="native"
                                                    className=""
                                                >
                                                    {parkingspots.map((parking) => (
                                                        <SelectItem key={parking.key}>
                                                            {parking.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                            </div>
                                            {/* <div className='w-full flex flex-col gap-4'>
                                                <div className='text-black text-lg dark:text-white'>Amenities</div>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <Checkbox radius="full">WiFi</Checkbox>
                                                    <Checkbox radius="full">Air conditioning</Checkbox>
                                                    <Checkbox radius="full">Balcony</Checkbox>
                                                    <Checkbox radius="full">Garage</Checkbox>
                                                    <Checkbox radius="full">Gym</Checkbox>
                                                    <Checkbox defaultSelected radius="full"> Free parking</Checkbox>
                                                    <Checkbox radius="full">Pets-friendly</Checkbox>
                                                    <Checkbox radius="full">Pool</Checkbox>
                                                    <Checkbox radius="full">Bar</Checkbox>
                                                    <Checkbox radius="full">TV</Checkbox>
                                                    <Checkbox radius="full">Linens</Checkbox>
                                                    <Checkbox radius="full">Heating</Checkbox>
                                                    <Checkbox radius="full">Dishwasher</Checkbox>
                                                    <Checkbox radius="full">Iron</Checkbox>
                                                    <Checkbox radius="full">Hair dryer</Checkbox>
                                                    <Checkbox radius="full">Kitchen</Checkbox>
                                                    <Checkbox radius="full">Breakfast</Checkbox>
                                                    <Checkbox defaultSelected radius="full">Security cameras</Checkbox>
                                                </div>
                                            </div> */}
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-black text-lg dark:text-white'>Pets</div>
                                                <div className="w-full flex flex-col gap-4">
                                                    <Checkbox radius="full">Cats allowed</Checkbox>
                                                    <Checkbox radius="full">Dogs allowed</Checkbox>

                                                </div>
                                            </div>
                                            <div>
                                                <Textarea
                                                    key="underlined"
                                                    variant="underlined"
                                                    label="Description"
                                                    labelPlacement="outside"
                                                    placeholder="Describe your property"
                                                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 183.8v-123A44.66 44.66 0 0 0 403.29 16H280.36a30.62 30.62 0 0 0-21.51 8.89L13.09 270.58a44.86 44.86 0 0 0 0 63.34l117 117a44.84 44.84 0 0 0 63.33 0l245.69-245.61A30.6 30.6 0 0 0 448 183.8zM352 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path><path d="M496 64a16 16 0 0 0-16 16v127.37L218.69 468.69a16 16 0 1 0 22.62 22.62l262-262A29.84 29.84 0 0 0 512 208V80a16 16 0 0 0-16-16z"></path></svg></span>Price</div>
                                <form >
                                    <div>
                                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                            <div className="w-full flex flex-col gap-4">
                                                <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                    <Input
                                                        type="number"
                                                        variant="underlined"
                                                        label="Price "
                                                        placeholder="Enter Your Price "
                                                        isRequired
                                                        validationBehavior="native"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg></span>Photos / video</div>
                                <form >
                                    <div>
                                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                            <div className="w-full flex flex-col gap-4">
                                                <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                                    <label for="file-input" class="sr-only">Choose file</label>
                                                    <input
                                                        type="file"
                                                        name="file-input"
                                                        id="file-input"
                                                        variant="underlined"
                                                        class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                                                    file:bg-gray-50 file:border-0
                                                    file:me-4
                                                    file:py-3 file:px-4
                                                    dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path></svg></span> Contacts</div>
                                <form >
                                    <div>
                                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-3 gap-4">

                                            <Input
                                                type="text"
                                                isRequired
                                                variant="underlined"
                                                label="First name"
                                                placeholder="Annette"
                                                validationBehavior="native"
                                            />
                                            <Input
                                                type="text"
                                                isRequired
                                                variant="underlined"
                                                label="Second name"
                                                placeholder="ererer"
                                                validationBehavior="native"
                                            />
                                        </div>
                                        <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-3 gap-4">

                                            <Input
                                                type="email"
                                                isRequired
                                                variant="underlined"
                                                label="Email"
                                                placeholder="Black"
                                                validationBehavior="native"
                                            />
                                            <Input
                                                type="text"
                                                isRequired
                                                variant="underlined"
                                                label="Phone number"
                                                placeholder="3025550107"
                                                validationBehavior="native"
                                            />
                                        </div>

                                        <div className='flex w-full flex-wrap flex-col md:flex-nowrap mb-6 md:mb-0 gap-4'>
                                            <Input
                                                type="text"
                                                isRequired
                                                variant="underlined"
                                                label="Company"
                                                placeholder="Enter your Company"
                                                validationBehavior="native"
                                            />
                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div className='flex items-center justify-end'>
                                <Button color="primary">
                                    Button
                                </Button>
                            </div>
                        </div>
                        <div className='md:w-5/12 w-full md:ps-4 '>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 sticky top-10'>
                                <div>
                                    <Progress
                                        size="sm"
                                        radius="sm"
                                        classNames={{
                                            base: "max-w-md",
                                            track: "drop-shadow-md border border-default",
                                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                                            label: "tracking-wider font-medium text-default-600",
                                            value: "text-foreground/60",
                                        }}
                                        label="content filled"
                                        value={65}
                                        showValueLabel={true}
                                    />
                                </div>

                                <div className='mt-5'>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Basic info</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Location</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Property details</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Price</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Photos / video</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> 
                                    Contacts</div>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PropertiesPage