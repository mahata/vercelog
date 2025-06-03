import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const targetDomain = "vercelog.mahata.org";

  const isAllowedHost = (host: string | null): boolean => {
    if (!host) return false;

    const allowedHosts = [targetDomain, "localhost:3000"];
    if (allowedHosts.includes(host)) return true;

    // Check for vercelog-*-mahatas-projects.vercel.app pattern
    const vercelPreviewPattern = /^vercelog-.+-mahatas-projects\.vercel\.app$/;
    return vercelPreviewPattern.test(host);
  };

  const currentHost = request.headers.get("host");
  if (!isAllowedHost(currentHost)) {
    const url = new URL(request.url);
    url.host = targetDomain;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
