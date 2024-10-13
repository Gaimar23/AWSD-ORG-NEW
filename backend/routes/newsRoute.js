import express from "express";
import {
  addArticle,
  getArticles,
  removeArticle,
  updateArticle,
} from "../controllers/newsController.js";
import multer from "multer";
//

const newsRouter = express.Router();

// Storing images
const Storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    //
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: Storage });

newsRouter.get("/list", getArticles);
newsRouter.post("/add", upload.single("image"), addArticle);
newsRouter.post("/delete", removeArticle);
newsRouter.post("/update", updateArticle);

export default newsRouter;
