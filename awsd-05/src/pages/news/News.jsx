import React, { useEffect, useState } from "react";
import "./News.scss";
import Navbar from "../../components/navbar/Navbar";
import article1 from "../../assets/images/recrutement/hiring01.jpg";
import article2 from "../../assets/images/recrutement/hiring02.jpg";
import author from "../../assets/images/team/teammate01.png";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";
import ArticlePost from "../../components/articlePost/ArticlePost";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);
  const [showArticle, setShowArticle] = useState(false);
  const [openArticle, setOpenArticle] = useState(false);
  // reand Article
  const [articlePost, setArticlePost] = useState("");
  const [theArticlePost, setTheArticlePost] = useState("");
  const [countContainer, setCountContainer] = useState(0);
  const [countArticle, setCountArticle] = useState(0);
  //
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const collectData = async () => {
      const response = await axios.get("http://localhost:5000/api/news/list");
      if (response.data.success) {
        setArticles(response.data.data);
      }
    };
    collectData();
    setTimeout(() => {
      setLoading(false);
    }, 2450);
  }, []);

  let isArticle = articles.length > 0 ? true : false;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = articles.slice(firstPostIndex, lastPostIndex);

  const displayArticle = () => {
    articlePost.style.display = "flex";
  };

  const handleArticle = (id) => {
    articles.forEach((item) => {
      if (item._id == id) {
        setOpenArticle(item);
      }
    });
    displayArticle();
  };

  return (
    <div className="news">
      <Navbar />
      <ArticlePost
        setShowArticle={setShowArticle}
        image={openArticle?.image}
        title={openArticle?.title}
        subtitle={openArticle?.subtitle}
        category={openArticle?.category}
        author={openArticle?.author}
        imageAuthor={author}
        article={openArticle?.article}
        setTheArticlePost={setTheArticlePost}
        setArticlePost={setArticlePost}
        setCountArticle={setCountArticle}
        setCountContainer={setCountContainer}
        countArticle={countArticle}
        countContainer={countContainer}
        articlePost={articlePost}
      />
      <div className="global-container">
        <hr className="navbar-bottom" />
        <h1>
          Actualité à{" "}
          <span
            style={{
              color: "green",
              borderBottom: "2px solid green",
              paddingBottom: "4px",
            }}
          >
            AWSD
          </span>
        </h1>
        <div className="container">
          <div className="sub-container">
            {/* {!isArticle ? ( */}
            {loading ? (
              <>
                <div className="loading-container">
                  <div className="loading"></div>
                </div>
                <div className="loading-container">
                  <div className="loading"></div>
                </div>
              </>
            ) : (
              currentPosts.map((item, index) => {
                return (
                  <div
                    className="article"
                    key={index}
                    onClick={() => handleArticle(item._id)}
                  >
                    <div className="head-image">
                      <div className="image">
                        <img
                          src={`http://localhost:5000/images/${item.image}`}
                          alt=""
                        />
                      </div>
                      <div className="image-title">
                        <h1 className="title">{item.title}</h1>
                        <p className="subtitle">{item.subtitle}</p>
                        <span className="category">{item.category}</span>
                        <div className="author">
                          <img src={author} alt="" />
                          <span className="name">{item.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="article-description">
                      {item.article.length > 202
                        ? item.article.slice(0, 202) + "......"
                        : item.article}
                    </div>
                    <button className="article-btn">Consulter</button>
                  </div>
                );
              })
            )}
          </div>
          <Pagination
            totalPots={articles.length}
            postsPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
