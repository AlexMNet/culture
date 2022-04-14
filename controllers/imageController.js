import Image from "../models/ImageModel.js";

const getAllImages = async (req, res) => {
  try {
    const { classification } = req.query;

    const queryObject = {};

    if (classification && classification !== "all") {
      queryObject.classification = classification;
    }

    let result = Image.find(queryObject);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const images = await result;

    const totalImages = await Image.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalImages / limit);

    res.status(200).json({
      status: "success",
      pages: numOfPages,
      results: totalImages,
      images,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      image,
    });
  } catch (err) {}
};

export { getAllImages, updateImage };
