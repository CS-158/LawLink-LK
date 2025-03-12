import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  caseType: { type: String, required: true },
  district: { type: String, required: true },
  courtDate: { type: Date, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
