import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest, ev: NextFetchEvent) => {

    const { id = "" } = req.page.params || {}

    const idRegex = /^[a-f\d]{24}$/i;

    if (!idRegex.test(id as string)) {
        const response = JSON.stringify({ message: "El id no es valido" })
        return new Response(response, { status: 400, headers: { "Content-Type": "application/json" } })
    }

    return NextResponse.next()

}