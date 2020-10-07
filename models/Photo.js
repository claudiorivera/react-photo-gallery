import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.models.Photo || mongoose.model("Photo", PhotoSchema);
