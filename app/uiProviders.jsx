"use client";

import { FirebaseProvider } from "@/app/context/Firebase";
import { Providers } from "@/app/providers";

export function UiProviders({ children }) {
	return (
		<FirebaseProvider>
			<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
				{children}
			</Providers>
		</FirebaseProvider>
	);
}
