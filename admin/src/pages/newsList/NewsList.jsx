import React, { useContext } from "react";
import "./NewsList.scss";
import { assets } from "../../assets/assets";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { DataContext } from "../../context/DataContext";

const NewsList = () => {
  const { getArticles, removeArticle, listArticles, url } =
    useContext(DataContext);

  return (
    <div className="news-list">
      {/* <h3 style={{ color: "white" }}>Article List</h3> */}
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Title</b>
          <b>Subtitle</b>
          <b>Action</b>
        </div>
        {listArticles.map((article, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/${article.image}`} alt="" />
              <b>{article.title}</b>
              <b>{article.subtitle}</b>
              <b style={{ display: "flex", gap: "30px" }}>
                {" "}
                <MdDeleteOutline
                  className="action-icon"
                  onClick={() => removeArticle(article._id, getArticles)}
                />
                <CiEdit className="action-icon" />
              </b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
