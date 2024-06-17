import { Navbar } from '@/components/navbar'
import { ScrollShadow } from '@nextui-org/react'
import React, { Suspense } from 'react'
import FooterSection from '@/components/footer'
import { usePathname } from 'next/navigation'

const UiLayout = ({ children }) => {
    const pathname = usePathname();
    const authPages = pathname === '/login' || pathname === '/register' || pathname === '/forgot-password'


    return (
        <>
            <div className="h-dvh flex flex-col">
                {!authPages && <Navbar />}
                <div className="grow flex overflow-hidden">
                    <ScrollShadow className="grow flex flex-col">
                        <div className="flex-1 flex flex-col">
                            <Suspense fallback={<div>Loading...</div>}>
                                {children}
                            </Suspense>
                        </div>
                        <Suspense fallback={"Loading..."}>
                            {!authPages && <FooterSection />}
                        </Suspense>
                    </ScrollShadow>
                </div>
            </div>
        </>
    )
}

export default UiLayout