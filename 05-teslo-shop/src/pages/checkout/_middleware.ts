import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { isValidToken } from "../../helpers";

type Middleware = (req: NextRequest, ev: NextFetchEvent) => Promise<NextResponse>;

export const middleware: Middleware = async (req, ev) => {

    // const { token = "" } = req.cookies;

    // try {
    //     await isValidToken(token);
    //     return NextResponse.next();
    // } catch (error) {
    //     const {origin,pathname} = req.nextUrl.clone();
    //     return NextResponse.redirect(`${origin}/auth/login?p=${pathname}`);
    // }
    return NextResponse.next();
}