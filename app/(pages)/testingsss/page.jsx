"use client"
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { useFirebase } from '@/app/context/Firebase';
import { Autocomplete, AutocompleteItem, Select, SelectItem } from '@nextui-org/react';
import { SearchIcon } from '@/components/icons';


const FilterableDataComponent = () => {
    const { firebaseDB: db } = useFirebase();
    const [data, setData] = useState([]);
    const [where1, setWhere1] = useState(new Set());
    const [where2, setWhere2] = useState();
    const [orderByField, setOrderByField] = useState(new Set());
    const [orderByDirection, setOrderByDirection] = useState(new Set(['asc']));
    const [limitValue, setLimitValue] = useState(new Set());


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
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return data;
        } catch (error) {
            console.error('Error fetching data: ', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const filters = {};
            if (where1.size && where1?.currentKey != "") {
                filters.where = filters.where || [];
                filters.where.push(['type', '==', Array.from(where1)[0]]);
            }
            if (where2) {
                filters.where = filters.where || [];
                filters.where.push(['address.city', '==', where2]);
                // filters.where.push(['address.city', '==', Array.from(where2)[0]]);
            }
            if (orderByField.size && orderByField?.anchorKey != "") {
                filters.orderBy = [Array.from(orderByField)[0], Array.from(orderByDirection)[0]];
            }

            if (limitValue.size && limitValue?.anchorKey != "") {
                filters.limit = parseInt(Array.from(limitValue)[0], 10);
            }


            console.info(filters)
            const result = await getFilteredData('properties', filters);
            setData(result);
        };

        fetchData();
    }, [where1, where2, orderByField, orderByDirection, limitValue]);

    return (
        <div>
            <Select
                label="Type"
                variant="bordered"
                placeholder="Select Property Type"
                selectedKeys={where1}
                onSelectionChange={setWhere1}
                disallowEmptySelection
            >
                <SelectItem value="" key={""}>none</SelectItem>
                <SelectItem value="apartment" key={"apartment"}>Apartment</SelectItem>
                <SelectItem value="flat" key={"flat"}>Flat</SelectItem>
                <SelectItem value="villa" key={"villa"}>Villa</SelectItem>
                <SelectItem value="office" key={"office"}>Office</SelectItem>
                <SelectItem value="studio" key={"studio"}>Studio</SelectItem>
                <SelectItem value="land" key={"land"}>Land</SelectItem>
            </Select>

            {/* <Select
                label="Search By Location"
                variant="bordered"
                placeholder="Search..."
                selectedKeys={where2}
                onSelectionChange={setWhere2}
                disallowEmptySelection
            >
                <SelectItem value="" key={""}>none</SelectItem>
                <SelectItem key="Vaishali Nagar">Vaishali Nagar</SelectItem>
                <SelectItem key="Jhotwara">Jhotwara</SelectItem>
            </Select> */}

            <Autocomplete
                label="Property Location"
                placeholder='Search Property Location...'
                selectedKeys={where2}
                onSelectionChange={setWhere2}
                startContent={<SearchIcon className="text-default-400 size-5" />}
            >
                <AutocompleteItem key="Vaishali Nagar">Vaishali Nagar</AutocompleteItem>
                <AutocompleteItem key="Jhotwara">Jhotwara</AutocompleteItem>
            </Autocomplete>

            <Select
                label="Order By"
                variant="bordered"
                placeholder="Select Order By"
                selectedKeys={orderByField}
                onSelectionChange={setOrderByField}
                disallowEmptySelection
            >
                <SelectItem value="" key={""}>none</SelectItem>
                <SelectItem key="sale_price">sale_price</SelectItem>
                <SelectItem key="createdAt">createdAt</SelectItem>
            </Select>

            <Select
                label="Order By Direction"
                variant="bordered"
                placeholder="Select Order Direction"
                selectedKeys={orderByDirection}
                onSelectionChange={setOrderByDirection}
                disallowEmptySelection
            >
                <SelectItem key="asc">Ascending</SelectItem>
                <SelectItem key="desc">Descending</SelectItem>
            </Select>

            <Select
                label="Limit"
                variant="bordered"
                placeholder="Select Limit"
                selectedKeys={limitValue}
                onSelectionChange={setLimitValue}
                disallowEmptySelection
            >
                <SelectItem value="" key={""}>All</SelectItem>
                <SelectItem key="5">5</SelectItem>
                <SelectItem key="10">10</SelectItem>
            </Select>

            <ul>
                {data.map((item) => (
                    <li key={item.id}><span>{item?.createdAt?.seconds}</span> | <span>{item?.sale_price}</span></li>
                ))}
            </ul>
        </div>
    );
};

export default FilterableDataComponent;
