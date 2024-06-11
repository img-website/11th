import { NextResponse } from "next/server";




export const middleware = (request) => {
    // Check for a valid access token cookie
    const accessTokenCookie = request.cookies.get('accessToken');
    const isLoggedIn = !!accessTokenCookie; // Same logic as in firebaseContext.js
    // console.log("accessTokenCookie", isLoggedIn);

    if (!isLoggedIn) {
        console.log('not authenticated');
        // Redirect to login if not authenticated (except for /login and /register)
        if (!request.nextUrl.pathname.startsWith("/login") &&
            !request.nextUrl.pathname.startsWith("/register")) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    } else {
        console.log('authenticated');
        // Redirect logged-in users to home on login and register page requests
        if (request.nextUrl.pathname === "/login" ||
            request.nextUrl.pathname === "/register") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next(); // Default behavior
};

export const config = {
    matcher: ["/", "/login", "/register"],
};
