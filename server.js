import "dotenv/config";
import express from "express";
import connectDB from "./db/connect.js";
import cors from "cors";
import imageRouter from "./routes/imageRoutes.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use("/api/v1/images", imageRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: "Not found...",
  });
});

let port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
