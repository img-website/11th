"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from '@nextui-org/react'
import { useState } from 'react'
import { EyeFilledIcon, EyeSlashFilledIcon, Google2Icon, GoogleIcon, LoginCircleIcon } from '@/components/icons'
// import { ThemeSwitch } from '@/components/theme-switch'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthentications } from '@/app/context/Authentications'



const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitLoading, setSubmitLoading] = useState(false);

    const authentications = useAuthentications();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        try {
            const userCredential = await authentications.signinUserWithEmailAndPass(email, password);
            setEmail("");
            setPassword("");
        } catch (error) {
            setSubmitLoading(false); // Ensure loading state is reset even on error
        } finally {
            setSubmitLoading(false); // Ensure loading state is always reset
        }
    }

    return (
        <div className='relative overflow-hidden'>
            <Image className='absolute inset-0 object-cover size-full' src='https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={400} height={400} alt='login background' />
            <div className="flex max-sm:flex-col w-full items-stretch h-dvh relative z-10">
                {/* <div className="sm:w-1/2 w-full"></div> */}
                <div className="w-full overflow-auto max-sm:h-dvh backdrop-blur-md bg-white/50 dark:bg-black/50 flex flex-col px-5">
                    <div className="grow py-4"></div>
                    <Card as={"form"} onSubmit={handleSubmit} className={`max-w-[400px] w-full overflow-visible mx-auto ${submitLoading ? 'pointer-events-none' : ''}`}>
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col grow">
                                <p className="text-md font-bold">Login Now</p>
                                <p className="text-small text-default-500">All fields are mandatory.</p>
                            </div>
                            {/* <ThemeSwitch /> */}
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Input
                                type="email"
                                label="Email ID"
                                id='email'
                                variant='underlined'
                                isRequired
                                value={email}
                                onValueChange={setEmail}
                                autoComplete='email'
                                validationBehavior="native"
                            />
                            <Input
                                type={isVisible ? "text" : "password"}
                                label="Password"
                                id='password'
                                variant='underlined'
                                isRequired
                                endContent={
                                    password != "" &&
                                    <button className="focus:outline-none" type="button" onClick={e => { setIsVisible(!isVisible) }}>
                                        {isVisible ? (
                                            <EyeSlashFilledIcon className="size-5" />
                                        ) : (
                                            <EyeFilledIcon className="size-5" />
                                        )}
                                    </button>
                                }
                                value={password}
                                onValueChange={setPassword}
                                autoComplete='current-password'
                                validationBehavior="native"
                            />
                        </CardBody>
                        <CardFooter className='justify-between'>
                            <Button as={Link} href='/register' color="default" variant='light' className='text-sm text-default-700'>
                                New User? <b>Signup</b>
                            </Button>
                            {!submitLoading ?
                                <Button type='submit' color="secondary" className='font-bold' endContent={<LoginCircleIcon className="size-5" />}>
                                    Sign In
                                </Button>
                                :
                                <Button type='submit' isDisabled color="secondary" className='font-bold' isLoading={submitLoading}>
                                    Please Wait...
                                </Button>
                            }
                        </CardFooter>
                    </Card>
                    <div className='max-w-[400px] w-full overflow-visible mx-auto relative my-4'>
                        <div className='size-8 rounded-full bg-white dark:bg-black flex items-center justify-center text-default-800 dark:text-default-200 m-auto uppercase text-sm font-bold'>or</div>
                    </div>
                    <Card className={`max-w-[400px] w-full overflow-visible mx-auto ${submitLoading ? 'pointer-events-none' : ''}`}>
                        <CardFooter>
                            <Button
                                type="button"
                                className="bg-default-100 text-default-800 dark:bg-sky-500 dark:text-white font-semibold w-full"
                                variant='ghost'
                                startContent={
                                    <>
                                        <GoogleIcon className="size-5 hidden dark:block" />
                                        <Google2Icon className="size-6 dark:hidden" />
                                    </>
                                }
                                onClick={authentications?.signinWithGoogle}
                            >
                                Sign in with Google
                            </Button>
                        </CardFooter>
                    </Card>
                    <div className="grow py-4"></div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage