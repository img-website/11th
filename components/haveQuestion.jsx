"use client"
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { SupportIcon } from '@/components/icons'
import { useFirebase } from '@/app/context/Firebase'
import { doc, getDoc } from 'firebase/firestore'
import SkeletonHaveQuestion from '@/components/skeleton/skeletonHaveQuestion'

const HaveQuestion = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        try {
            const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "cta_button"));
            setData(docSnap.data());
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        loading ? <SkeletonHaveQuestion /> :
            <div className="max-w-7xl mx-auto w-full relative py-16 px-4 bg-default-100 md:rounded-xl">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{data?.cta1?.heading}</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">{data?.cta1?.description}</p>

                    <div className="mt-6">
                        <Button size='lg' variant='ghost' as={Link} href={data?.cta1?.buttonUrl || ""} startContent={<SupportIcon className="size-5" />}> {data?.cta1?.buttonText || "Support"}</Button>
                    </div>
                </div>
            </div>
    )
}

export default HaveQuestion
