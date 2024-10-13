import mongoose from "mongoose";

//
const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  article: { type: String, required: true },
  image: { type: String, required: true },
});

const articleModel =
  mongoose.models.article || mongoose.model("article", articleSchema);

export default articleModel;
