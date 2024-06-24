import React from 'react'
import { LogoutIcon } from '@/components/icons'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react';
import Link from 'next/link';

const ProfileIcon = ({ authentications }) => {
    // console.log(authentications)
    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        src: authentications?.user?.photoURL,
                        size: "sm"
                    }}
                    className="transition-transform"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" textValue="profile" className="h-14 gap-2" showDivider>
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-bold capitalize">{authentications?.user?.displayName}</p>
                </DropdownItem>
                {
                    authentications?.DBUser?.isAdmin &&
                    <DropdownItem key="dashboard" textValue="dashboard" className="gap-2" showDivider>
                        <Link href="/admin/dashboard">
                            <p className="font-bold">Admin</p>
                        </Link>
                    </DropdownItem>
                }
                <DropdownItem onClick={authentications?.signOutHandle} key="logout" textValue="logout" color="danger" startContent={<LogoutIcon className="size-5" />}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default ProfileIcon