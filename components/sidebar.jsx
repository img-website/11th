"use client"
import React from 'react'
import { Button, ScrollShadow } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { useNavbarAndSidebarToggle } from '@/app/context/SidebarAndNavbarToggle'

const Sidebar = () => {
    const pathname = usePathname();
	const toggle = useNavbarAndSidebarToggle();

    return (
        <div className={`grow flex flex-col px-1 max-lg:hidden overflow-hidden shrink-0 ${toggle?.isNavbarCollapsed ? 'max-w-[4.5rem] w-[4.5rem]' : 'max-w-56 w-full'}`}>
            <div className="flex flex-col grow overflow-hidden">
                <ScrollShadow hideScrollBar as={"ul"} className="flex-grow overflow-y-auto pb-5">
                    {
                        siteConfig?.navItems?.map(link => {
                            return (
                                <li className="p-1" key={link?.href}>
                                    <Button as={Link} href={link?.href} startContent={link?.icon && <link.icon className="size-6 text-sky-600 dark:text-default-800" />} color="default" variant="light" className={`w-full justify-start gap-4 font-semibold ${toggle?.isNavbarCollapsed ? 'min-w-0' : ''} ${pathname === link?.href ? 'bg-default-100 dark:bg-default-100' : ''}`}>
                                        <span className={toggle?.isNavbarCollapsed ? 'hidden' : ''}> {link?.label} </span>
                                    </Button>
                                </li>
                            )
                        }
                        )
                    }
                </ScrollShadow>
            </div>
        </div>
    )
}

export default Sidebar