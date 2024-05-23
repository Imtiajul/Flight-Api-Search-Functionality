import { NextResponse } from "next/server";
import { getFlightById } from "@/_utils";

export async function GET(request, {params: {id}} ) {

   const data = await getFlightById(id)

   return NextResponse.json(data);
}