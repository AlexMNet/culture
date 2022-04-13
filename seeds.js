import mongoose from "mongoose";
import Image from "./models/ImageModel.js";

mongoose
  .connect(
    "mongodb+srv://admin-alex:test123@hotsaucecluster.aupxg.mongodb.net/culture?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongo Connection open!");
  })
  .catch((err) => {
    console.log(err);
  });

const seedImages = [
  {
    url: "https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.24.38-9zijoye9dteugy6agooo506u3c6wrin920a99mavvv4z9mahkt7qbu6thl2l3v39.png",
    lastModified: "2022-02-23T21:31:27.000Z",
  },
  {
    url: "https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.25.42-0fw8tob3vhrhl8u0f3mu2g37bwnojkpwiaku4rfi3xk868y7dygr2hbge1oenzmc.png",
    lastModified: "2022-02-23T21:31:27.000Z",
  },
  {
    url: "https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.26.45-gufo8yohnsyuh4ys4zav04g9xes9bjum0tm7674n1zml5xoffbf49jtg66iom9et.png",
    lastModified: "2022-02-23T21:31:27.000Z",
  },
  {
    url: "https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.27.49-bxu773d2wqhgitol14xxxi82dwno2gaieiiauqgwm4m4ra2z7kdf7n5bry1hx5cs.png",
    lastModified: "2022-02-23T21:31:27.000Z",
  },
  {
    url: "https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.28.52-b0l43ldf7drejbvb9zwwdfk6mzrijepfskmd2fe2nnkypep4oykasytfad4jgs65.png",
    lastModified: "2022-02-23T21:31:27.000Z",
  },
  {
    url: "https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.29.56-j2ksuoclj7qv9i3eg6kibqp7tt37ofuz7gttf1bljmfjrr7r8so3cud2wgqjrxi9.png",
    lastModified: "2022-02-23T21:31:27.000Z",
  },
  {
    url: "https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.30.59-lrwqymy7doww346bzw7ie77a2lxl4hypjwm96man4eoh1c31ardyt9sjmuyoy99g.png",
    lastModified: "2022-02-23T21:31:27.000Z",
  },
];

const seedDB = async () => {
  await Image.deleteMany({});
  await Image.insertMany(seedImages);
};

seedDB().then(() => {
  mongoose.connection.close();
});
