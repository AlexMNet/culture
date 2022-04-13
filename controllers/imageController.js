import Image from "../models/ImageModel.js";

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json({
      status: "success",
      data: {
        images,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const updateImage = async (req, res) => {
  res.send("update image");
};

export { getAllImages, updateImage };
