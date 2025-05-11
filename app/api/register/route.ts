import { NextResponse } from "next/server"

export async function POST() {
  // Return 404 as registration is disabled
  return NextResponse.json({ message: "Registration is disabled" }, { status: 404 })
}
