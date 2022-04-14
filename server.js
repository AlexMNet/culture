import "dotenv/config";
import express from "express";
import connectDB from "./db/connect.js";
import cors from "cors";
import imageRouter from "./routes/imageRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("images rendering...");
});

app.use("/api/v1/images", imageRouter);
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
