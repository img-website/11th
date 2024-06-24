"use client"
import { useFirebase } from '@/app/context/Firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const Agents = () => {
    const { firebaseDB } = useFirebase();
    const [data, setData] = useState([]); // State to store all agents' data

    useEffect(() => {
        const getAgents = async () => {
            try {
                const agentsCollection = collection(firebaseDB, "agents");
                const querySnapshot = await getDocs(agentsCollection);

                const agents = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data() // Spread operator to include all document fields
                }));

                setData(agents);
            } catch (error) {
                console.error("Error fetching agents:", error);
                // Handle errors appropriately (e.g., display an error message)
            }
        };

        getAgents();
    }, [firebaseDB]);

    return (
        <div className="max-w-7xl mx-auto w-full px-4 relative py-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

                <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                {data && data.length > 0 && data?.map((item, index) => (
                    <div key={index} className="lg:col-span-3 md:col-span-6">
                        <div className="group text-center">
                            <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                <Image width={400} height={400} src={item?.image} className="" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                    <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="facebook" className="size-4"></i></Link></li>
                                    <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="instagram" className="size-4"></i></Link></li>
                                    <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="linkedin" className="size-4"></i></Link></li>
                                </ul>
                            </div>

                            <div className="content mt-3">
                                <Link href="agent-profile.html" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">{item?.name}</Link>
                                <p className="text-slate-400">{item?.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* <div className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                            <Image width={400} height={400} src="/client/05.jpg" className="" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="facebook" className="size-4"></i></Link></li>
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="instagram" className="size-4"></i></Link></li>
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="linkedin" className="size-4"></i></Link></li>
                            </ul>
                        </div>

                        <div className="content mt-3">
                            <Link href="agent-profile.html" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Krista John</Link>
                            <p className="text-slate-400">Property Broker</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                            <Image width={400} height={400} src="/client/06.jpg" className="" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="facebook" className="size-4"></i></Link></li>
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="instagram" className="size-4"></i></Link></li>
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="linkedin" className="size-4"></i></Link></li>
                            </ul>
                        </div>

                        <div className="content mt-3">
                            <Link href="agent-profile.html" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Roger Jackson</Link>
                            <p className="text-slate-400">Property Broker</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 md:col-span-6">
                    <div className="group text-center">
                        <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                            <Image width={400} height={400} src="/client/07.jpg" className="" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="facebook" className="size-4"></i></Link></li>
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="instagram" className="size-4"></i></Link></li>
                                <li className="inline"><Link href="" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><i data-feather="linkedin" className="size-4"></i></Link></li>
                            </ul>
                        </div>

                        <div className="content mt-3">
                            <Link href="agent-profile.html" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Johnny English</Link>
                            <p className="text-slate-400">Property Broker</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Agents