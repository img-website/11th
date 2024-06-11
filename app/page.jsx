"use client"
import { useFirebase } from "./context/Firebase";
import { Button } from "@nextui-org/button";

export default function Home() {

    const firebase = useFirebase();

    return (
        <>
            <Button variant="solid" color="danger" onClick={firebase.signOutHandle}>Logout</Button>
        </>
    );
}
