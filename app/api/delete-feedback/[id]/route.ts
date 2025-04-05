import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongodb";
import Feedback from "../../../../models/Feedback";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const result = await Feedback.deleteOne({ _id: params.id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Feedback not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
