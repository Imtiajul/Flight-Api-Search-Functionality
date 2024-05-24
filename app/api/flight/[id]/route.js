import { NextResponse } from "next/server";
import { getFlightById } from "@/_utils";

export async function GET(request, {params: {id=1}} ) {
   // console.log(id);
   const data = await getFlightById(id)

   // console.log(data);

   return NextResponse.json(data);
}