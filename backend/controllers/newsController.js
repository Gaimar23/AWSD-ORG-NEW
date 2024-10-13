import newsModel from "../models/newsModel.js";
import fs from "fs";

const addArticle = async (req, res) => {
  const { title, subtitle, category, author, article } = req.body;

  let image_fileName = `${req.file.filename}`;
  try {
    const news = new newsModel({
      title: title,
      subtitle: subtitle,
      category: category,
      author: author,
      article: article,
      image: image_fileName,
    });

    await news.save();
    return res.json({ success: true, message: "Article successfuly created" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const removeArticle = async (req, res) => {
  try {
    const article = await newsModel.findById(req.body.id);
    fs.unlink(`uploads/${article.image}`, () => {});
    await newsModel.findByIdAndDelete(req.body.id);
    return res.json({ success: true, message: "Article has been deleted" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await newsModel.find({});
    return res.json({ success: true, data: articles });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const updateArticle = async (req, res) => {};

export { addArticle, removeArticle, getArticles, updateArticle };
