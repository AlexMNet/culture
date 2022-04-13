import express from "express";
const router = express.Router();
import { getAllImages, updateImage } from "../controllers/imageController.js";

router.route("/").get(getAllImages);
router.route("/:id").patch(updateImage);

export default router;
