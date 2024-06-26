import { NextResponse } from "next/server";




export const middleware = (request) => {
    // Check for a valid access token cookie
    const isAdminCookie = request.cookies.get('isAdmin');
    const accessTokenCookie = request.cookies.get('accessToken');
    const isAdmin = !!isAdminCookie; // Same logic as in firebaseContext.js
    const isLoggedIn = !!accessTokenCookie; // Same logic as in firebaseContext.js
    // console.log("accessTokenCookie", isLoggedIn);

    if (!isLoggedIn) {
        // Redirect to login if not authenticated (except for /login and /register)
        if (!request.nextUrl.pathname.startsWith("/login") &&
            !request.nextUrl.pathname.startsWith("/register")) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    } else {
        // Redirect logged-in users to home on login and register page requests
        if (request.nextUrl.pathname.startsWith("/login") ||
            request.nextUrl.pathname.startsWith("/register")) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (!isAdmin) {
        // Redirect logged-in users to home on login and register page requests
        if (request.nextUrl.pathname.startsWith("/admin/")) {
            // console.log("isAdminCookie", isAdmin);
            return NextResponse.redirect(new URL("/", request.url));
        }
    } else {
    }

    return NextResponse.next(); // Default behavior
};

export const config = {
    matcher: [
        "/login/:path*",
        "/register/:path*",
        "/property-detail/:path*",
        "/property/:path*",
        "/admin/:path*"
    ],
};
