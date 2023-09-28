import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const req = request.headers.get("referer");
  console.log(req);
  if (req != "https://checkout.stripe.com/") {
    return NextResponse.redirect("https://www.underthewhitetree.it/");
  } else {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/success",
};
