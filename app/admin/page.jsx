"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const AdminPage = () => {
    const router = useRouter();
    router.push('/admin/dashboard')
    return false
}

export default AdminPage