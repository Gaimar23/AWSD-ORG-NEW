import express from "express";
import {
  addJob,
  getJobs,
  removeJob,
  updateJob,
} from "../controllers/jobController.js";
import multer from "multer";

const jobRouter = express.Router();

// Storing images
const Storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    //
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: Storage });

jobRouter.get("/get", getJobs);
jobRouter.post("/add", upload.single("image"), addJob);
jobRouter.post("/update", updateJob);
jobRouter.post("/delete", removeJob);

export default jobRouter;
