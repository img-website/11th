"use client"
import BuyerBenefits from '@/components/buyerBenefits'
import FeaturedPropertyCard from '@/components/featuredPropertyCard'
import HaveQuestion from '@/components/haveQuestion'
import { SearchIcon } from '@/components/icons'
import Steps from '@/components/steps'
import { Button, Input, Card, Select, SelectItem } from '@nextui-org/react'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { useFirebase } from '@/app/context/Firebase';

const PropertyPage = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('default'); // Initial sort option

    // Fetch data from Firestore on component mount and sort by default
    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(firebaseDB, 'properties');
            const querySnapshot = await getDocs(colRef);
            setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchData();
    }, [firebaseDB]);

    // Filter data based on search term
    useEffect(() => {
        const filtered = data.filter(item =>
            item.title?.toLowerCase().includes(searchTerm?.toLowerCase())
        );
        setFilteredData(filtered);
    }, [data, searchTerm]);

    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = async (event) => {
        setSortBy(event.target.value);

        const sortedData = filteredData.slice(); // Create copy
        if (event.target.value == 'default') {
            const colRef = collection(firebaseDB, 'properties');
            const querySnapshot = await getDocs(colRef);

            // Process and set data after sorting
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(data);
            // Default sorting logic (if needed)
        } else if (event.target.value == 'lowPrice') {
            const colRef = collection(firebaseDB, 'properties');
            const q = query(colRef, orderBy('sale_price', 'asc')); // Adjust field and direction
            const querySnapshot = await getDocs(q);

            // Process and set data after sorting
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(data);
        } else if (event.target.value == 'highPrice') {
            const colRef = collection(firebaseDB, 'properties');
            const q = query(colRef, orderBy('sale_price', 'desc')); // Adjust field and direction
            const querySnapshot = await getDocs(q);

            // Process and set data after sorting
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(data);
        } else if (event.target.value == 'createdAt') {
            const colRef = collection(firebaseDB, 'properties');
            const q = query(colRef, orderBy('createdAt', 'desc')); // Adjust field and direction
            const querySnapshot = await getDocs(q);

            // Process and set data after sorting
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(data);
        }

        setFilteredData(sortedData);
    };
    return (
        <>
            <section className="relative table w-full py-24 bg-[url('/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="max-w-7xl mx-auto w-full px-4 relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white pb-4">Find Your Dream Home</h3>
                        <p className="text-slate-200 max-w-2xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
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

            <div className="max-w-7xl mx-auto w-full px-4 relative -mt-[36px]">
                <div className="grid grid-cols-1">
                    <div className="subcribe-form z-1">
                        <form className="relative max-w-2xl mx-auto flex border-2 border-default-300 dark:border-default-400 rounded-2xl overflow-hidden dark:has-[input:focus]:border-default-600 has-[input:focus]:border-default-400">
                            <Select
                                variant='bordered'
                                value={sortBy}
                                label="Sort by"
                                isRequired
                                defaultSelectedKeys={["default"]}
                                classNames={{
                                    value: "value-classes font-bold",
                                    base: "base-classes w-52",
                                    label: "label-classes",
                                    description: "description-classes",
                                    errorMessage: "errorMessage-classes",
                                    mainWrapper: "mainWrapper-classes",
                                    innerWrapper: "innerWrapper-classes",
                                    helperWrapper: "helperWrapper-classes",
                                    listbox: "listbox-classes",
                                    trigger: "trigger-classes !border-r-2 border-default-300 dark:border-default-400 rounded-r-none bg-default-50 !border-y-0 !border-l-0",
                                    selectorIcon: "selectorIcon-classes",
                                    spinner: "spinner-classes",
                                    listboxWrapper: "listboxWrapper-classes",
                                    popoverContent: "popoverContent-classes",
                                }}
                                onChange={handleSortChange}
                                placeholder="Sort by..."
                            >
                                <SelectItem value="default" key={"default"}>Default</SelectItem>
                                <SelectItem value="lowPrice" key={"lowPrice"}>By Low Price</SelectItem>
                                <SelectItem value="highPrice" key={"highPrice"}>By High Price</SelectItem>
                                <SelectItem value="createdAt" key={"createdAt"}>By Date</SelectItem>
                            </Select>
                            <Input
                                variant='bordered'
                                type="search"
                                id="search"
                                name="search"
                                label="Search"
                                classNames={{
                                    base: "base-classes",
                                    label: "label-classes",
                                    mainWrapper: "main-wrapper-classes",
                                    inputWrapper: "input-wrapper-classes rounded-l-none bg-default-50 !border-0",
                                    innerWrapper: "inner-wrapper-classes",
                                    input: "input-classes font-bold",
                                    clearButton: "clear-button-classes",
                                    helperWrapper: "helper-wrapper-classes",
                                    description: "description-classes",
                                    errorMessage: "error-message-classes",
                                }}
                                startContent={<SearchIcon className="size-5" />}
                                endContent={
                                    <Button type='button' variant='solid' color='default' className='font-semibold'>Search</Button>
                                }
                                placeholder="Type to search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto w-full px-4 relative">

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {filteredData.map(item => (
                            <FeaturedPropertyCard key={item.id} item={item} />
                        ))}
                        {/* <Card key={item.id}>
                                {`${item.title} ${new Timestamp(item.createdAt.seconds, item.createdAt.nanoseconds).toDate().toISOString()}`}
                            </Card> */}
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

                <Suspense fallback={"Loading..."} >
                    <Steps />
                </Suspense>

                <Suspense fallback={"Loading..."} >
                    <HaveQuestion />
                </Suspense>
            </section>
        </>
    )
}

export default PropertyPage