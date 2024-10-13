import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./NewsAdd.scss";
import axios from "axios";
import { DataContext } from "../../context/DataContext";
import { toast } from "react-toastify";

const NewsAdd = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    category: "",
    author: "",
    article: "",
  });

  const { url, getArticles, setListArticles } = useContext(DataContext);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("article", data.article);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/news/add`, formData);
    if (response.data.success) {
      setData({
        title: "",
        subtitle: "",
        category: "",
        author: "",
        article: "",
      });
      setImage(false);
      toast.success(response.data.message);
      getArticles();
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="news-add">
      <form className="news-form" onSubmit={onSubmitHandler}>
        <div className="news-head">
          <div className="upload-image-news">
            {/* <p>Upload image</p> */}
            <label htmlFor="imageNews">
              <img
                className="news-img"
                src={image ? URL.createObjectURL(image) : assets.jobDefault}
                alt=""
                onChange={handleOnChange}
              />
            </label>
            <input
              type="file"
              required
              id="imageNews"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="title">
            <input
              type="text"
              name="title"
              maxLength="20"
              placeholder="Title"
              className="title-input"
              value={data.title}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="subtitle"
              maxLength="20"
              placeholder="Subtitle"
              className="title-input"
              value={data.subtitle}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="category"
              maxLength="15"
              placeholder="Category"
              className="title-input"
              value={data.category}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="author"
              maxLength="15"
              placeholder="Author"
              className="title-input"
              value={data.author}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <textarea
          name="article"
          placeholder="Write your article here"
          className="description"
          rows={6}
          value={data.article}
          onChange={handleOnChange}
        ></textarea>
        <button type="submit" className="publish-job">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewsAdd;
