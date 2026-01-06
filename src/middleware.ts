import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = '/'

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/ui'],
}
