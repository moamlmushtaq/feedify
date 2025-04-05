import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongodb";
import Feedback from "../../../../models/Feedback";


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    // الآن ننتظر params ليصبح جاهزًا
    const { status } = await req.json();
  
    if (!status || (status !== "pending" && status !== "important")) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
  
    try {
      await connectToDatabase();
  
      // الآن يمكننا استخدام params.id بعد التأكد من قيمته
      const result = await Feedback.updateOne({ _id: params.id }, { $set: { status } });
  
      if (result.modifiedCount === 0) {
        return NextResponse.json({ error: "Feedback not found" }, { status: 404 });
      }
  
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
  }
  