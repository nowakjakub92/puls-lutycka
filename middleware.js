import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthenticated = false; // Tutaj dodamy prawdziwą weryfikację użytkownika później

  const protectedRoutes = ["/dashboard"];

  if (protectedRoutes.includes(request.nextUrl.pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Middleware dla `/dashboard` i podstron
};
