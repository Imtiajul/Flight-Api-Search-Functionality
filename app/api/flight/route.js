import { getAllFlights } from "@/_utils";
import { NextResponse } from "next/server";

export async function GET(request) {
   const data = await getAllFlights();

   return NextResponse.json(data);
}