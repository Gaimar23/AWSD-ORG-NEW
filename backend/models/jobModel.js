import mongoose from "mongoose";

//
const jobSchema = mongoose.Schema({
  poste: { type: String, required: true },
  department: { type: String, required: true },
  reference: { type: String, required: true, unique: true },
  contrat: { type: String, required: true },
  education: { type: String, required: true },
  localisation: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const jobModel = mongoose.models.job || mongoose.model("job", jobSchema);
export default jobModel;
