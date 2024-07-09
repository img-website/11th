"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Checkbox, Input, Radio, RadioGroup, Select, SelectItem, Textarea, Button, Progress } from "@nextui-org/react";
import { useFirebase } from '@/app/context/Firebase';
import { toast } from 'sonner';
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';


const bedroomsCollaction = [
    { key: "1", label: "1 Bedroom" },
    { key: "2", label: "2 Bedrooms" },
    { key: "3", label: "3 Bedrooms" },
    { key: "4", label: "4 Bedrooms" },
    { key: "5", label: "5 Bedrooms" },
    { key: "5+", label: "5+ Bedrooms" },

];
const bathroomsCollaction = [
    { key: "1", label: "1 Bathroom" },
    { key: "2", label: "2 Bathrooms" },
    { key: "3", label: "3 Bathrooms" },
    { key: "4", label: "4 Bathrooms" },
    { key: "5", label: "5 Bathrooms" },
    { key: "5+", label: "5+ Bathrooms" },

];
const parkingspotsCollaction = [
    { key: "1", label: "1 Parking" },
    { key: "2", label: "2 Parkings" },
    { key: "3", label: "3 Parkings" },
    { key: "4", label: "4 Parkings" },
    { key: "5", label: "5 Parkings" },
    { key: "5+", label: "5+ Parkings" },

];


const AddPage = () => {
    const { firebaseDB } = useFirebase();
    const [loading, setLoading] = useState(false);
    const [propertyTypeCollaction, setPropertyTypeCollaction] = useState();
    const [locationsCollaction, setLocationsCollaction] = useState();


    // Banner
    const [banner, setBanner] = useState('');

    // Main Details
    const [title, setTitle] = useState('A');
    const [type, setType] = useState({ key: "", label: "" });

    const [sale_price, setSale_price] = useState(0);
    const [condition, setCondition] = useState('A');
    const [isVarified, setIsVarified] = useState(false);
    const [overview, setOverview] = useState('A');

    // Address Details
    const [area, setArea] = useState({ key: "", location: "" });
    const [fullAddress, setFullAddress] = useState('A');

    // Images
    const [images, setImages] = useState([]);

    // Property Details
    const [apartment_area, setApartment_area] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [built, setBuilt] = useState(0);
    const [parking_places, setParking_places] = useState(0);
    const [pets_allowed, setPets_allowed] = useState("A");

    // Contacts
    const [first_name, setFirst_name] = useState('A');
    const [sure_name, setSure_name] = useState('A');
    const [email, setEmail] = useState('A');
    const [phone, setPhone] = useState('A');

    const handleTypeChange = (id) => {
        if (id.size === 0) {
            setType({ id: "", type: "" });
        } else {
            const selectedKey = [...id][0];
            const selectedAnimal = propertyTypeCollaction.find(item => item.id === selectedKey);
            setType({ id: selectedAnimal.id, type: selectedAnimal.type });
        }
    };

    const handleAreaChange = (id) => {
        if (id.size === 0) {
            setArea({ id: "", location: "" });
        } else {
            const selectedKey = [...id][0];
            const selectedAnimal = locationsCollaction.find(item => item.id === selectedKey);
            setArea({ id: selectedAnimal.id, location: selectedAnimal.location });
        }
    };

    const getProperiyTypes = async () => {
        const collectionRef = collection(firebaseDB, "propertyTypes");
        try {
            const querySnapshot = await getDocs(collectionRef);
            const res = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPropertyTypeCollaction(res)
        } catch (error) {
            console.error('Error fetching propertyTypes data: ', error);
        }
    }

    const getLocations = async () => {
        const collectionRef = collection(firebaseDB, "locations");
        try {
            const q = query(collectionRef, where("status", "==", true));
            const querySnapshot = await getDocs(q);
            const res = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setLocationsCollaction(res)
        } catch (error) {
            console.error('Error fetching locations data: ', error);
        }
    }

    useEffect(() => {
        getProperiyTypes();
        getLocations();
    }, []);



    // Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(firebaseDB, "properties"), {
                title,
                type: {
                    id: type?.id,
                    type: type?.type,
                },
                sale_price: Number(sale_price),
                banner: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
                condition: String(condition?.currentKey || condition),
                isVarified: Boolean(isVarified),
                overview: String(overview),
                address: {
                    area: {
                        id: area?.id,
                        location: area?.location,
                    },
                    fullAddress: String(fullAddress),
                },
                images: [
                    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1512916958891-fcf61b2160df?q=80&w=2071&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
                ],
                property_details: {
                    apartment_area: Number(apartment_area),
                    bathrooms: Number(bathrooms.currentKey || bathrooms),
                    bedrooms: Number(bedrooms.currentKey || bedrooms),
                    built: Number(built),
                    parking_places: Number(parking_places.currentKey || parking_places),
                    pets_allowed: String(pets_allowed),
                },
                createdAt: serverTimestamp(),
                modifiedAt: serverTimestamp()
            });
            toast.success("Form Submitted Successfully", {
                description: 'Our team will contact you shortly.',
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("Error adding document", {
                description: 'Please try again later.',
            });
        }
    }

    return (
        <>
            <Button variant='solid' onClick={handleSubmit}>Upload Data</Button>
            <div className='relative bg-gray-50 dark:bg-black'>
                <div className='max-w-7xl mx-auto w-full px-4 relative py-10'>
                    <div className='flex flex-wrap md:gap-0 gap-5'>
                        <form onSubmit={handleSubmit} className='md:w-7/12 w-full md:pe-4'>
                            <div className='text-black font-bold text-4xl dark:text-white'> Add property</div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg></span> Basic info</div>

                                <div className="flex w-full flex-wrap md:flex-nowrap flex-col gap-4">
                                    <div className='w-full'>
                                        <Input
                                            type="text"
                                            isRequired
                                            variant="underlined"
                                            label="Title"
                                            placeholder="Write a title"
                                            validationBehavior="native"
                                            value={title}
                                            onValueChange={setTitle}
                                        />
                                    </div>
                                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Select
                                            variant="underlined"
                                            label="Property type  "
                                            placeholder="Choose property type"
                                            isRequired
                                            validationBehavior="native"
                                            className=""
                                            selectedKeys={new Set([type.id])}
                                            onSelectionChange={handleTypeChange}

                                        >
                                            {propertyTypeCollaction && propertyTypeCollaction?.map((item) => (
                                                <SelectItem key={item?.id}>
                                                    {item?.type}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        <Select
                                            variant="underlined"
                                            label="Condition"
                                            placeholder="Choose condition"
                                            isRequired
                                            validationBehavior="native"
                                            className=""
                                            selectedKeys={condition}
                                            onSelectionChange={setCondition}
                                        >
                                            <SelectItem key={"new"}>New</SelectItem>
                                            <SelectItem key={"old"}>Old</SelectItem>
                                        </Select>
                                    </div>

                                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Checkbox isSelected={isVarified} onValueChange={setIsVarified}>
                                            Property has been inspected
                                        </Checkbox>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span> Location</div>

                                <div className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                    <div className="w-full flex flex-col gap-4">
                                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                            <Select
                                                variant="underlined"
                                                label="Area"
                                                placeholder="Choose Area"
                                                isRequired
                                                validationBehavior="native"
                                                className=""
                                                selectedKeys={new Set([area.id])}
                                                onSelectionChange={handleAreaChange}
                                            >
                                                {locationsCollaction && locationsCollaction?.map((item) => (
                                                    <SelectItem key={item?.id}>
                                                        {item?.location}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-wrap g-4">
                                        <Input
                                            label="Full Address"
                                            type="text"
                                            isRequired
                                            variant="underlined"
                                            validationBehavior="native"
                                            value={fullAddress}
                                            onValueChange={setFullAddress}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></span> Property details</div>

                                <div className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                    <div className="w-full flex flex-col gap-4">
                                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                            <Input
                                                type="number"
                                                variant="underlined"
                                                label="Total area, sq.m "
                                                placeholder="2"
                                                isRequired
                                                validationBehavior="native"
                                                value={apartment_area}
                                                onValueChange={setApartment_area}
                                            />
                                            <Select
                                                variant="underlined"
                                                label="Bedrooms"
                                                placeholder="Choose Bedrooms"
                                                isRequired
                                                validationBehavior="native"
                                                selectedKeys={bedrooms}
                                                onSelectionChange={setBedrooms}
                                            >
                                                {bedroomsCollaction.map((item) => (
                                                    <SelectItem key={item.key}>
                                                        {item.label}
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
                                            selectedKeys={bathrooms}
                                            onSelectionChange={setBathrooms}
                                        >
                                            {bathroomsCollaction.map((Bathroom) => (
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
                                            selectedKeys={parking_places}
                                            onSelectionChange={setParking_places}
                                        >
                                            {parkingspotsCollaction.map((parking) => (
                                                <SelectItem key={parking.key}>
                                                    {parking.label}
                                                </SelectItem>
                                            ))}
                                        </Select>

                                    </div>
                                    <div className='w-full flex flex-col gap-4'>
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
                                    </div>
                                    <div className='w-full flex flex-col gap-4'>
                                        <div className='text-black text-lg dark:text-white'>Pets</div>
                                        <div className="w-full flex flex-col gap-4">
                                            <Checkbox radius="full">Cats allowed</Checkbox>
                                            <Checkbox radius="full">Dogs allowed</Checkbox>

                                        </div>
                                    </div>
                                    <div>
                                        <Textarea
                                            variant="underlined"
                                            label="Description"
                                            labelPlacement="outside"
                                            placeholder="Describe your property"
                                            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                            value={overview}
                                            onValueChange={setOverview}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 183.8v-123A44.66 44.66 0 0 0 403.29 16H280.36a30.62 30.62 0 0 0-21.51 8.89L13.09 270.58a44.86 44.86 0 0 0 0 63.34l117 117a44.84 44.84 0 0 0 63.33 0l245.69-245.61A30.6 30.6 0 0 0 448 183.8zM352 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path><path d="M496 64a16 16 0 0 0-16 16v127.37L218.69 468.69a16 16 0 1 0 22.62 22.62l262-262A29.84 29.84 0 0 0 512 208V80a16 16 0 0 0-16-16z"></path></svg></span>Price</div>

                                <div className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                    <div className="w-full flex flex-col gap-4">
                                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                            <Input
                                                type="number"
                                                variant="underlined"
                                                label="Price "
                                                placeholder="Enter Your Price "
                                                isRequired
                                                validationBehavior="native"
                                                value={sale_price}
                                                onValueChange={setSale_price}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg></span>Photos / video</div>

                                <div className="flex w-full flex-wrap md:flex-nowrap flex-col  gap-4">
                                    <div className="w-full flex flex-col gap-4">
                                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                                            <input
                                                type="file"
                                                name="file-input"
                                                id="file-input"
                                                variant="underlined"
                                                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                                                    file:bg-gray-50 file:border-0
                                                    file:me-4
                                                    file:py-3 file:px-4
                                                    dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white shadow-md rounded-md dark:bg-slate-900 p-6 my-8'>
                                <div className='text-2xl pb-3 font-bold text-black dark:text-white flex items-center gap-2'> <span className='flex items-center'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path></svg></span> Contacts</div>

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-3 gap-4">

                                    <Input
                                        type="text"
                                        isRequired
                                        variant="underlined"
                                        label="First name"
                                        placeholder="Annette"
                                        validationBehavior="native"
                                        value={first_name}
                                        onValueChange={setFirst_name}
                                    />
                                    <Input
                                        type="text"
                                        isRequired
                                        variant="underlined"
                                        label="Sure name"
                                        placeholder="ererer"
                                        validationBehavior="native"
                                        value={sure_name}
                                        onValueChange={setSure_name}
                                    />
                                </div>
                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-3 gap-4">

                                    <Input
                                        type="email"
                                        isRequired
                                        variant="underlined"
                                        label="Email"
                                        placeholder="Black"
                                        validationBehavior="native"
                                        value={email}
                                        onValueChange={setEmail}
                                    />
                                    <Input
                                        type="text"
                                        isRequired
                                        variant="underlined"
                                        label="Phone number"
                                        placeholder="3025550107"
                                        validationBehavior="native"
                                        value={phone}
                                        onValueChange={setPhone}
                                    />
                                </div>

                            </div>

                            <div className='flex items-center justify-end'>
                                <Button color="primary" variant="solid" type="submit">
                                    Add Propery
                                </Button>
                            </div>
                        </form>
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
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Basic info</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Location</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Property details</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Price</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span> Photos / video</div>
                                    <div className='flex items-center text-base text-black dark:text-white gap-3'><span className='flex items-center text-red-400'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></span>
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

export default AddPage