"use client"
import { useAuthentications } from "@/app/context/Authentications"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }) => {
    const authentications = useAuthentications()
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const handleAuthenticationCheck = async () => {
        if (!authentications?.isAdmin == null) {
            setLoading(true);
            console.info("null", authentications?.isAdmin)
        } else if (authentications?.isAdmin == false) {
            setLoading(true);
            router.push("/login");
            router.refresh();
            console.info("false", authentications?.isAdmin)
        } else if (authentications?.isAdmin == true) {
            setLoading(false);
            console.info("true", authentications?.isAdmin)
        } else {
            setLoading(true);
        }
    };

    useEffect(() => {
        handleAuthenticationCheck();
    }, [authentications]);

    return (
        loading ? (
            <div>loading...</div>
        ) : (
            <div className="admin-layout">{children}</div>
        )
    )
}

export default AdminLayout