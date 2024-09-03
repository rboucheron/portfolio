import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const protectedRoutes = ['/admin/profil'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token') || req.headers.get('Authorization')?.replace('Bearer ', '');

  const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

  
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/admin/:path*'], 
};
