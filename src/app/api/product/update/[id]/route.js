import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const formData = await req.json();
  const id = params.id;
  try {
    const data = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: formData,
    });

    await prisma.$disconnect();

    return NextResponse.json({ msg: "updated", data: data }, { status: 200 });
  } catch (err) {
    await prisma.$disconnect();
    return NextResponse.json({ msg: "failed", data: data }, { status: 406 });
  }
}
