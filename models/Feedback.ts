import mongoose, { Schema, model, models } from "mongoose";

const FeedbackSchema = new Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "important"], // الحالة يمكن أن تكون "قيد العمل" أو "مهم"
      default: "pending",
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default models.Feedback || model("Feedback", FeedbackSchema);
