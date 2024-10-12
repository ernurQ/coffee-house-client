import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const {
		nextUrl: { pathname },
	} = request

	if (pathname === '/') {
		return NextResponse.redirect(new URL('/about-us', request.url))
	}
}

export const config = {
	matcher: ['/', '/admin/:path*'],
}
