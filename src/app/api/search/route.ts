import { DbConnection } from "@/lib/db";
import ItemModel from "@/lib/schema/schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await DbConnection();

    const url = req.nextUrl;
    const param = url.searchParams.get("q");

    const items = await ItemModel.find();

    const result = items.filter((e) => e.username.includes(param));

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
};
