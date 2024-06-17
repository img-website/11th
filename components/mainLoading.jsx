import React from 'react'
import { Spinner } from '@nextui-org/react'
import { useAuthentications } from '@/app/context/Authentications';

const MainLoading = () => {
    const authentications = useAuthentications();

    return (
        <div className={`flex items-center justify-center h-screen bg-default-50 fixed inset-0 z-50 duration-400 transition-all ${!authentications.mainLoading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <Spinner size='xl' color='primary' label="Loading..." />
        </div>
    )
}

export default MainLoading