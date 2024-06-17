import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { SupportIcon } from '@/components/icons'

const HaveQuestion = () => {
    return (
        <div className="max-w-7xl mx-auto w-full relative py-16 px-4 bg-default-100 rounded-xl">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have Question ? Get in touch!</h3>

                <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                <div className="mt-6">
                    <Button size='lg' variant='ghost' as={Link} href="" startContent={<SupportIcon className="size-5" />}> Contact us</Button>
                </div>
            </div>
        </div>
    )
}

export default HaveQuestion
