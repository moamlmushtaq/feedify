import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Feedback from "../../../models/Feedback";

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();
    if (!name || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectToDatabase();
    const feedback = new Feedback({ name, message });
    await feedback.save();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
