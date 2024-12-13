import { DbConnection } from "@/lib/db";
import ItemModel from "@/lib/schema/schema";
import { NextResponse } from "next/server";
const url = "https://randomuser.me/api/";
const options = {
  method: "GET",
};

export const GET = async () => {
  try {
    await DbConnection();
    const result = await ItemModel.find();
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
export const POST = async () => {
  try {
    await DbConnection();
    const ApiInfo = await fetch(url, options)
      .then((res) => res.json())
      .then((res) => res.results[0]);
    const { gender, name, location, email, login, dob, registered, picture } =
      ApiInfo;
    const result = await new ItemModel({
      gender,
      name,
      location,
      username: login.username,
      email,
      dob,
      registered,
      picture,
    }).save();
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
