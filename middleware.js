import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/no") {
    return NextResponse.rewrite(new URL(`/no/privat`, request.url));
  }
  if (pathname === "/en") {
    return NextResponse.rewrite(new URL(`/en/private`, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
