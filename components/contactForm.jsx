"use client"
import { Button, Input, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import SkeletonContactForm from '@/components/skeleton/skeletonContactForm';
import { useEffect, useState } from 'react';
import { useFirebase } from '@/app/context/Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';
import { CheckCircleIcon } from './icons';

const ContactForm = () => {
    const { firebaseDB } = useFirebase();

    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [yourQuestion, setYourQuestion] = useState('');
    const [yourComment, setYourComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const docRef = await addDoc(collection(firebaseDB, "contact_leads"), {
                name,
                email,
                Question: yourQuestion,
                Comment: yourComment,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
            toast.success("Form Submitted Successfully", {
                description: 'Our team will contact you shortly.',
            });
            setName('');
            setEmail('');
            setYourQuestion('');
            setYourComment('');
        } catch (error) {
            console.error("Error adding document: ", error);
            toast.error("Error adding document", {
                description: 'Please try again later.',
            });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        loading ? <SkeletonContactForm /> :
            <section className={`relative ${isLoading ? 'pointer-events-none' : ''}`}>
                <div className="max-w-7xl mx-auto w-full px-4 relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <Image className='size-full object-contain' width={400} height={400} src="/svg/contact.svg" alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:me-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h1 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h1>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <Input
                                                    isRequired
                                                    type="text"
                                                    variant='bordered'
                                                    label="Your Name"
                                                    validationBehavior="native"
                                                    value={name}
                                                    onValueChange={setName}
                                                />
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <Input
                                                    isRequired
                                                    type="email"
                                                    variant='bordered'
                                                    label="Your Email"
                                                    validationBehavior="native"
                                                    value={email}
                                                    onValueChange={setEmail}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <Input
                                                    isRequired
                                                    type="text"
                                                    variant='bordered'
                                                    label="Your Question"
                                                    validationBehavior="native"
                                                    value={yourQuestion}
                                                    onValueChange={setYourQuestion}
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <Textarea
                                                    variant='bordered'
                                                    label="Your Comment"
                                                    validationBehavior="native"
                                                    value={yourComment}
                                                    onValueChange={setYourComment}
                                                ></Textarea>
                                            </div>
                                        </div>
                                        <Button
                                            variant='solid'
                                            {...isLoading ? { disabled: true } : {}}
                                            isLoading={isLoading}
                                            startContent={!isLoading ? <CheckCircleIcon className="size-5" /> : ''}
                                            type="submit"
                                            className="font-semibold"
                                        >
                                            {isLoading ? 'Submitting...' : 'Submit'}
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactForm