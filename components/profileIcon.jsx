import React from 'react'
import { LogoutIcon } from '@/components/icons'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react';

const ProfileIcon = ({ credential, LogoutHandler }) => {
    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        src: credential?.photoURL,
                        size: "sm"
                    }}
                    className="transition-transform"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" textValue="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">{credential?.displayName}</p>
                </DropdownItem>
                <DropdownItem onClick={LogoutHandler} key="logout" textValue="logout" color="danger" startContent={<LogoutIcon className="size-5" />}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default ProfileIcon