import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const data = await prisma.product.findMany();

    await prisma.$disconnect();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    await prisma.$disconnect();
    return NextResponse.json({ msg: "failed", data: data }, { status: 406 });
  }
}
