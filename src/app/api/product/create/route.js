import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  try {
    const data = await prisma.product.create({
      data: formData,
    });

    await prisma.$disconnect();

    return NextResponse.json({ msg: "created", data: data }, { status: 201 });
  } catch (err) {
    await prisma.$disconnect();
    return NextResponse.json({ msg: "failed", data: data }, { status: 406 });
  }
}
