import React, { useEffect, useState } from "react";
import "./ArticlePost.scss";

const ArticlePost = ({
  setShowArticle,
  image,
  title,
  subtitle,
  category,
  author,
  article,
  imageAuthor,
  setArticlePost,
  setTheArticlePost,
  setCountContainer,
  setCountArticle,
  countContainer,
  countArticle,
  articlePost,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setArticlePost(document.getElementById("article-post"));
      setTheArticlePost(document.getElementById("the-article-post"));
    }, 1000);
  }, []);

  document.body.onclick = () => {
    if (countContainer != countArticle) {
      articlePost.style.display = "none";
      setShowArticle(false);
    }
    setCountContainer(0);
    setCountArticle(0);
  };

  const clickContainerCounter = () => {
    setCountContainer((prev) => prev + 1);
  };

  const clickArticleCounter = () => {
    setCountArticle((prev) => prev + 1);
  };

  return (
    <div
      className="article-post"
      id="article-post"
      onClick={clickContainerCounter}
    >
      <div
        className="container"
        id="the-article-post"
        onClick={clickArticleCounter}
      >
        <div className="sub-container">
          <div className="article">
            <div className="head-image">
              <div className="image">
                <img src={`http://localhost:5000/images/${image}`} alt="" />
              </div>
              <div className="image-title">
                <h1 className="title">
                  {title?.length < 13 ? title + " ......" : title}
                </h1>
                <p className="subtitle">{subtitle}</p>
                <span className="category">{category}</span>
                <div className="author">
                  <img src={imageAuthor} alt="" />
                  <span className="name">{author}</span>
                </div>
              </div>
            </div>
            <div className="article-description">{article}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePost;
