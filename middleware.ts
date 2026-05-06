import { NextRequest, NextResponse } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="College Coaches", charset="UTF-8"',
    },
  });
}

export function middleware(request: NextRequest) {
  const configuredAuth = process.env.COLLEGE_PAGE_AUTH;

  if (!configuredAuth) {
    return unauthorizedResponse();
  }

  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const encodedCredentials = authorization.split(" ")[1];

  try {
    const decodedCredentials = atob(encodedCredentials);

    if (decodedCredentials === configuredAuth) {
      return NextResponse.next();
    }
  } catch {
    return unauthorizedResponse();
  }

  return unauthorizedResponse();
}

export const config = {
  matcher: ["/showcase/college-coaches/:path*"],
};
