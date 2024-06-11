"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useFirebase } from "@/app/context/Firebase";
import MainLoading from "@/components/mainLoading";
import { Toaster } from 'sonner'
import { Navbar } from "@/components/navbar";

export function Providers({ children, themeProps }) {
	const router = useRouter();
	const firebase = useFirebase();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<Toaster richColors expand={false} position="bottom-left" />
				<MainLoading />
				{firebase.isLoggedIn && <Navbar />}
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
