import { getAllFlightSegments } from "@/_utils";
import { NextResponse } from "next/server";

export async function GET() {
   const data = await getAllFlightSegments();

   return NextResponse.json(data);
}

