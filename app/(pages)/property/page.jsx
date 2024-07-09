"use client"
import BuyerBenefits from '@/components/buyerBenefits'
import FeaturedPropertyCard from '@/components/featuredPropertyCard'
import HaveQuestion from '@/components/haveQuestion'
import { SearchIcon } from '@/components/icons'
import Steps from '@/components/steps'
import { Button, Input, Card, Select, SelectItem, Autocomplete, AutocompleteItem, Avatar } from '@nextui-org/react'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy, Timestamp, limit } from 'firebase/firestore';
import { useFirebase } from '@/app/context/Firebase';
import SkeletonFeaturedPropertyCard from '@/components/skeleton/skeletonFeaturedPropertyCard'

const PropertyPage = () => {

    const { firebaseDB: db } = useFirebase();
    const [locations, setLocations] = useState([]);
    const [data, setData] = useState([]);
    const [properyTypeBy, setPropertyTypeBy] = useState(new Set());
    const [locationBy, setLocationBy] = useState();
    const [orderByField, setOrderByField] = useState(new Set());
    const [orderByDirection, setOrderByDirection] = useState(new Set(['asc']));
    const [limitValue, setLimitValue] = useState(new Set(['10']));
    const [loading, setLoading] = useState(false);


    const getFilteredData = async (collectionName, filters = {}) => {
        const collectionRef = collection(db, collectionName);
        let q = query(collectionRef);

        // Apply 'where' filters
        if (filters.where && Array.isArray(filters.where)) {
            filters.where.forEach(condition => {
                q = query(q, where(...condition));
            });
        }

        // Apply 'orderBy' filter
        if (filters.orderBy) {
            q = query(q, orderBy(...filters.orderBy));
        }

        // Apply 'limit' filter
        if (filters.limit) {
            q = query(q, limit(filters.limit));
        }

        // Fetch data
        try {
            setLoading(true);
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return data;
        } catch (error) {
            console.error('Error fetching data: ', error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const filters = {};
            if (properyTypeBy.size && properyTypeBy?.currentKey != "") {
                filters.where = filters.where || [];
                filters.where.push(['type', '==', Array.from(properyTypeBy)[0]]);
            }
            if (locationBy) {
                filters.where = filters.where || [];
                filters.where.push(['address.city', '==', locationBy]);
                // filters.where.push(['address.city', '==', Array.from(locationBy)[0]]);
            }
            if (orderByField.size && orderByField?.anchorKey != "") {
                filters.orderBy = [Array.from(orderByField)[0], Array.from(orderByDirection)[0]];
            }

            if (limitValue.size && limitValue?.anchorKey != "") {
                filters.limit = parseInt(Array.from(limitValue)[0], 10);
            }

            const result = await getFilteredData('properties', filters);
            setData(result);
        };

        fetchData();
    }, [properyTypeBy, locationBy, orderByField, orderByDirection, limitValue]);


    useEffect(() => {
        const fetchLocationData = async () => {
            const colRef = collection(db, 'locations');
            const querySnapshot = await getDocs(colRef);
            setLocations(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchLocationData();
    }, [db]);

    const checkVariable = (variable) => {
        if (typeof variable === 'string' && variable?.length) {
            return false;
        }
        return variable === '' || variable === null || variable === undefined;
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
                            <div className='flex flex-col w-full'>
                                <div className="w-full flex">
                                    <Autocomplete
                                        label="Property Location"
                                        name='searchLocationWise'
                                        placeholder='Search Property Location...'
                                        classNames={{
                                            base: "base-classess shrink-1 w-full *:*:rounded-b-none",
                                            clearButton: "clearButton-classess",
                                            inputWrapper: "inputWrapper-classess",
                                            listbox: "listbox-classess",
                                            listboxWrapper: "listboxWrapper-classess",
                                            popoverContent: "popoverContent-classess",
                                            endContentWrapper: "endContentWrapper-classess",
                                            selectorButton: "selectorButton-classess"
                                        }}
                                        selectedKeys={locationBy}
                                        onSelectionChange={setLocationBy}
                                        listboxProps={{
                                            emptyContent: 'Property Not Found on this Location.'
                                        }}
                                        defaultItems={locations}
                                        startContent={<SearchIcon className="text-default-400 size-5" />}
                                    >
                                        {(item) => (
                                            <AutocompleteItem key={item?.location} value={item?.location}>
                                                {item?.location}
                                            </AutocompleteItem>
                                        )}
                                    </Autocomplete>
                                </div>
                                <div className="w-full flex">
                                    <Select
                                        variant='bordered'
                                        label="Property Type"
                                        selectedKeys={properyTypeBy}
                                        onSelectionChange={setPropertyTypeBy}
                                        disallowEmptySelection
                                        classNames={{
                                            value: "value-classes font-bold",
                                            base: "base-classes shrink-1",
                                            label: "label-classes",
                                            description: "description-classes",
                                            errorMessage: "errorMessage-classes",
                                            mainWrapper: "mainWrapper-classes",
                                            innerWrapper: "innerWrapper-classes",
                                            helperWrapper: "helperWrapper-classes",
                                            listbox: "listbox-classes",
                                            trigger: "trigger-classes !border-r-2 border-default-300 dark:border-default-400 rounded-none bg-default-50 !border-y-0 !border-r-0 !border-l-0",
                                            selectorIcon: "selectorIcon-classes",
                                            spinner: "spinner-classes",
                                            listboxWrapper: "listboxWrapper-classes",
                                            popoverContent: "popoverContent-classes",
                                        }}
                                        placeholder="All Type"
                                    >
                                        <SelectItem value="" key={""}>All Type</SelectItem>
                                        <SelectItem value="apartment" key={"apartment"}>Apartment</SelectItem>
                                        <SelectItem value="flat" key={"flat"}>Flat</SelectItem>
                                        <SelectItem value="villa" key={"villa"}>Villa</SelectItem>
                                        <SelectItem value="office" key={"office"}>Office</SelectItem>
                                        <SelectItem value="studio" key={"studio"}>Studio</SelectItem>
                                        <SelectItem value="land" key={"land"}>Land</SelectItem>
                                    </Select>

                                    <Select
                                        variant='bordered'
                                        label="Order By"
                                        selectedKeys={orderByField}
                                        onSelectionChange={setOrderByField}
                                        disallowEmptySelection
                                        classNames={{
                                            value: "value-classes font-bold",
                                            base: "base-classes shrink-1",
                                            label: "label-classes",
                                            description: "description-classes",
                                            errorMessage: "errorMessage-classes",
                                            mainWrapper: "mainWrapper-classes",
                                            innerWrapper: "innerWrapper-classes",
                                            helperWrapper: "helperWrapper-classes",
                                            listbox: "listbox-classes",
                                            trigger: "trigger-classes !border-r-2 border-default-300 dark:border-default-400 rounded-none bg-default-50 !border-y-0 !border-r-0",
                                            selectorIcon: "selectorIcon-classes",
                                            spinner: "spinner-classes",
                                            listboxWrapper: "listboxWrapper-classes",
                                            popoverContent: "popoverContent-classes",
                                        }}
                                        placeholder="Default"
                                    >
                                        <SelectItem value="" key={""}>Default</SelectItem>
                                        <SelectItem key="sale_price">Price</SelectItem>
                                        <SelectItem key="createdAt">Date</SelectItem>
                                    </Select>
                                    <Select
                                        variant='bordered'
                                        label="Order By Direction"
                                        selectedKeys={orderByDirection}
                                        onSelectionChange={setOrderByDirection}
                                        disallowEmptySelection
                                        isDisabled={checkVariable(orderByField?.currentKey)}
                                        classNames={{
                                            value: "value-classes font-bold",
                                            base: "base-classes shrink-1",
                                            label: "label-classes",
                                            description: "description-classes",
                                            errorMessage: "errorMessage-classes",
                                            mainWrapper: "mainWrapper-classes",
                                            innerWrapper: "innerWrapper-classes",
                                            helperWrapper: "helperWrapper-classes",
                                            listbox: "listbox-classes",
                                            trigger: "trigger-classes !border-r-2 border-default-300 dark:border-default-400 rounded-none bg-default-50 !border-y-0 !border-r-0",
                                            selectorIcon: "selectorIcon-classes",
                                            spinner: "spinner-classes",
                                            listboxWrapper: "listboxWrapper-classes",
                                            popoverContent: "popoverContent-classes",
                                        }}
                                        placeholder="Asc"
                                    >
                                        <SelectItem key="asc">{orderByField?.anchorKey == "sale_price" ? "Low to High" : "New to Old"}</SelectItem>
                                        <SelectItem key="desc">{orderByField?.anchorKey == "sale_price" ? "High to Low" : "Old to New"}</SelectItem>
                                    </Select>
                                    <Select
                                        variant='bordered'
                                        label="Limit"
                                        selectedKeys={limitValue}
                                        onSelectionChange={setLimitValue}
                                        disallowEmptySelection
                                        classNames={{
                                            value: "value-classes font-bold",
                                            base: "base-classes shrink-1",
                                            label: "label-classes",
                                            description: "description-classes",
                                            errorMessage: "errorMessage-classes",
                                            mainWrapper: "mainWrapper-classes",
                                            innerWrapper: "innerWrapper-classes",
                                            helperWrapper: "helperWrapper-classes",
                                            listbox: "listbox-classes",
                                            trigger: "trigger-classes !border-r-2 border-default-300 dark:border-default-400 rounded-none bg-default-50 !border-y-0 !border-r-0",
                                            selectorIcon: "selectorIcon-classes",
                                            spinner: "spinner-classes",
                                            listboxWrapper: "listboxWrapper-classes",
                                            popoverContent: "popoverContent-classes",
                                        }}
                                        placeholder="All"
                                    >
                                        <SelectItem value="" key={""}>All</SelectItem>
                                        <SelectItem key="5">5</SelectItem>
                                        <SelectItem key="10">10</SelectItem>
                                    </Select>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <section className="relative pb-16 pt-10">
                <div className="max-w-7xl mx-auto w-full px-4 relative">

                    {loading ? (
                        <SkeletonFeaturedPropertyCard />
                    ) : (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                            {data.map(item => (
                                <FeaturedPropertyCard key={item.id} item={item} />
                            ))}
                            {/* <Card key={item.id}>
                                {`${item.title} ${new Timestamp(item.createdAt.seconds, item.createdAt.nanoseconds).toDate().toISOString()}`}
                            </Card> */}
                        </div>

                    )}

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