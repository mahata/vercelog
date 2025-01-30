import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const targetDomain = "vercelog.mahata.org";
  const allowedHosts = [targetDomain, "localhost:3000"];

  const currentHost = request.headers.get("host");
  if (!allowedHosts.includes(currentHost ?? "")) {
    const url = new URL(request.url);
    url.host = targetDomain;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
