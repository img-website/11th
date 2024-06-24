import React, { Suspense } from 'react'
import FeaturedPropertyCard from '@/components/featuredPropertyCard'
// import { doc, getDoc } from 'firebase/firestore';
// import { useFirebase } from '@/app/context/Firebase';

const FeaturedProperties = () => {
    // const { firebaseDB } = useFirebase();
    // const [data, setData] = React.useState([]);

    // const getData = async () => {
    //     try {
    //         const docSnap = await getDoc(doc(firebaseDB, "pagesContent", "homePage"));
    //         setData(docSnap.data().HeroBannerContent);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getData();
    // }, [])

    return (
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <Suspense fallback={"Loading Featured Properties Card"}>
                    <FeaturedPropertyCard />
                </Suspense>
            </div>
        </div>
    )
}

export default FeaturedProperties