import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    lastModified: {
      type: String,
    },
    classification: {
      type: String,
      enum: {
        values: ["unclassified", "foaming", "not-foaming"],
      },
      default: "unclassified",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Image", ImageSchema);
