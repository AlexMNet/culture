import "dotenv/config";
import mongoose from "mongoose";
import Image from "./models/ImageModel.js";
import { seedImages } from "./seedImages.js";

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection open!");
  })
  .catch((err) => {
    console.log(err);
  });

const seedDB = async () => {
  await Image.deleteMany({});
  await Image.insertMany(seedImages);
};

seedDB().then(() => {
  mongoose.connection.close();
});
