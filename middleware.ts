import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.url;
  const subdomain = request.headers.get("host")?.split(".")[0];

  if (subdomain === "bio" && !url.includes("/bio")) {
    return NextResponse.rewrite(`/bio${url}`);
  }

  return NextResponse.next();
}
