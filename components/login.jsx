"use client"
import { Button } from '@nextui-org/react'
import { LoginIcon } from '@/components/icons'
import ProfileIcon from '@/components/profileIcon'
import { useAuthentications } from '@/app/context/Authentications'
import Link from 'next/link'

const Login = () => {
    const authentications = useAuthentications();

    return (
        authentications?.isLoggedIn ?
            <ProfileIcon authentications={authentications} />
            :
            <Button
                as={Link}
                href="/login"
                className="text-sm font-semibold text-zinc-900 dark:text-white bg-sky-100 dark:bg-default-100"
                startContent={<LoginIcon className="sm:size-5 size-4 text-sky-600 dark:text-white" />}
                variant="flat"
            >
                Signin
            </Button>
    )
}

export default Login