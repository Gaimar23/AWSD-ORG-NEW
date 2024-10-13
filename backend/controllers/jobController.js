import jobModel from "../models/jobModel.js";
import fs from "fs";

// add job
const addJob = async (req, res) => {
  const {
    poste,
    department,
    reference,
    contrat,
    education,
    localisation,
    type,
    description,
  } = req.body;
  // console.log("Adding job");
  // console.log("req.file:", req.file);
  let image_fileName = `${req.file.filename}`;
  try {
    const exits = await jobModel.findOne({ reference });
    if (exits) {
      return res.json({ success: false, message: "Reference already exists" });
    }

    const job = new jobModel({
      poste: poste,
      department: department,
      reference: reference,
      contrat: contrat,
      education: education,
      localisation: localisation,
      type: type,
      description: description,
      image: image_fileName,
    });

    await job.save();
    return res.json({ success: true, message: "Job successfuly created" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

// Remove job
const removeJob = async (req, res) => {
  try {
    const job = await jobModel.findById(req.body.id);
    fs.unlink(`uploads/${job.image}`, () => {});
    await jobModel.findByIdAndDelete(req.body.id);
    return res.json({ success: true, message: "The offer has been deleted" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

// update job
const updateJob = async (req, res) => {
  const {
    poste,
    department,
    reference,
    contrat,
    education,
    localisation,
    type,
    description,
    id,
  } = req.body;
  try {
    const job = await jobModel.findById(id);
    if (job.image != req.file.filename) {
      fs.unlink(`uploads/${job.image}`, () => {});
      await jobModel.findByIdAndUpdate(id, {
        image: req.file.filename,
      });
    }
    await jobModel.findByIdAndUpdate(id, {
      poste: poste,
      department: department,
      reference: reference,
      contrat: contrat,
      education: education,
      localisation: localisation,
      type: type,
      description: description,
    });
    return res.json({ success: true, message: "job successfully updated" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error while updating" });
  }
};

// get list of jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find({});
    res.json({ success: true, data: jobs });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addJob, removeJob, updateJob, getJobs };
