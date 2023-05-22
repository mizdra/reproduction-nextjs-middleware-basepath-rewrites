import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
// NOTE: Removing `middleware.ts` prevents runtime errors.

export function middleware(req: NextRequest) {
  // NOTE: Returning `NextResponse.next()` instead of `NextResponse.rewrite(req.nextUrl)` prevents runtime errors.
  return NextResponse.rewrite(req.nextUrl);
}
