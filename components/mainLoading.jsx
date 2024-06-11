import React from 'react'
import { Spinner } from '@nextui-org/react'
import { useFirebase } from '@/app/context/Firebase'

const MainLoading = () => {
    const firebase = useFirebase();

    return (
        <div className={`flex items-center justify-center h-screen bg-default-50 fixed inset-0 z-50 duration-400 transition-all ${!firebase.mainLoading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
            <Spinner size='xl' color='primary' label="Loading..." />
        </div>
    )
}

export default MainLoading