import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Feedback from "../../..//models/Feedback";

export async function GET() {
  await connectToDatabase();
  const feedbacks = await Feedback.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ feedbacks });
}
