import "dotenv/config";
import express from "express";
import connectDB from "./db/connect.js";
const app = express();

app.get("/images", (req, res) => {
  res.send("images rendering...");
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
