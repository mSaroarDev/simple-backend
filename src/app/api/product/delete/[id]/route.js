import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const id = params.id;
  try {
    const data = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });

    await prisma.$disconnect();

    return NextResponse.json({ msg: "deleted", data: data }, { status: 200 });
  } catch (err) {
    await prisma.$disconnect();
    return NextResponse.json({ msg: "failed", data: data }, { status: 406 });
  }
}
