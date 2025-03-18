import { NextResponse } from "next/server";
import { getAuth } from "firebase/auth";
import app from "@/firebase/firebaseConfig";

export async function middleware(req) {
  const auth = getAuth(app);
  const user = auth.currentUser;

  const protectedRoutes = ["/dashboard"];

  if (protectedRoutes.includes(req.nextUrl.pathname) && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Ścieżki, które chcemy chronić
};
