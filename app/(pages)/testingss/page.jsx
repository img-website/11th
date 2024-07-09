"use client"
import { useState, useEffect } from 'react';
import { Button, Card, Input, Select, SelectItem } from '@nextui-org/react';
import { collection, getDocs, query, where, orderBy, Timestamp, addDoc, serverTimestamp } from 'firebase/firestore';
import { useFirebase } from '@/app/context/Firebase';
import { toast } from 'sonner';


const SearchAndFilterss = () => {
    const { firebaseDB } = useFirebase();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(firebaseDB, "properties"), {
                title: "Test Our team will contact you shortly",
                titleSearch: "Test Our team will contact you shortly".trim().toLowerCase(),
                titleSearchArr: "Test Our team will contact you shortly".toLowerCase().split(' '),
                price: Number(1200500),
                sale_price: Number(1200500),
                banner: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
                condition: "new",
                isVarified: true,
                overview: "Etiam ut morbi egestas nunc quis. Nulla tincidunt senectus suspendisse neque, sed sem ut donec sed. Nullam hac netus quis nec tortor mi auctor risus praesent. In pharetra consequat diam nibh consectetur aliquet nulla. Non convallis nascetur viverra viverra diam vel bibendum sed. Elementum odio sed etiam consequat scelerisque in. Diam sit donec nunc enim. Tellus, commodo eget pharetra pharetra quis pellentesque. Enim aliquam sit in porttitor sed gravida a. Aliquam ac tellus sit erat. Non, et ac enim felis. Proin habitasse sit ut mauris, aliquam ornare pretium, nulla aliquam. Scelerisque velit netus quis mauris, dictumst suspendisse tortor.",
                address: {
                    apartment_road_area: "Behind of Gaurd Colony",
                    city: "Jaipur",
                    house_flat_block_no: "405",
                    line2: "aake ke call kar lena",
                    pincode: Number(302021),
                    state: "Rajasthan",
                },
                images: [
                    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1512916958891-fcf61b2160df?q=80&w=2071&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
                ],
                property_details: {
                    apartment_area: Number(56),
                    bathrooms: Number(2),
                    bedrooms: Number(4),
                    built: Number(2024),
                    parking_places: Number(2),
                    pets_allowed: [
                        "Cats Only",
                        "Cats and Dogs",
                        "Dogs Only",
                        "Not Allowed"
                    ],
                    type: "apartment"
                },
                condition: "new",
                condition: "new",
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
        <div>
            <Button variant='bordered' color='primary' size='lg' onClick={handleSubmit}>Save Data</Button>
        </div>
    );
};

export default SearchAndFilterss;
