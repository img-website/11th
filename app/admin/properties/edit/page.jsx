"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EditPageReturn = () => {
    const router = useRouter();
    useEffect(()=>{
        router.push('/admin/properties');
    },[]);
    return (
        <div>EditPageReturn</div>
    )
}

export default EditPageReturn