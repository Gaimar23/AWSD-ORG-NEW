import React, { useEffect, useState } from "react";
import "./recrutement.scss";
import Navbar from "../../components/navbar/Navbar";
import SwiperHiring from "../../components/swiperHiring/SwiperHiring";
import logo from "../../assets/images/contact/contact01.jpg";
import axios from "axios";
import PaginationJobs from "../../components/paginationJobs/PaginationJobs";
import Footer from "../../components/footer/Footer";

const Recrutement = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [loading, setLoading] = useState(false);
  const [cdi, setCdi] = useState([]);
  const [cdd, setCdd] = useState([]);
  const [stages, setStages] = useState([]);

  const collectJobs = async () => {
    const response = await axios.get(`http://localhost:5000/api/job/get`);
    if (response.data.success) {
      setJobs(response.data.data);
      // console.log(response.data.data);
      if (response.data.data.length > 0) {
        response.data.data.forEach((job) => {
          if (job.contrat.toLowerCase() === "cdi") {
            cdi.push(job);
          }
          if (job.contrat.toLowerCase() === "cdd") {
            cdd.push(job);
          }
          if (job.contrat.toLowerCase() === "stage") {
            stages.push(job);
          }
        });
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    collectJobs();
    setTimeout(() => {
      setLoading(false);
    }, 2950);
  }, []);
  let isJobs = jobs.length > 0 ? true : false;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="recrutement">
      <Navbar />
      <SwiperHiring />
      <div className="global-container">
        <h1>
          Offres disponible chez{" "}
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

        <div className="job-container">
          {loading ? (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="sub-container">
              <div className="info-and-field">
                <div className="offers">
                  <span className="count">{jobs.length}</span>
                  <span className="title">offres disponibles</span>
                </div>
                <div className="type-cdi">
                  <span className="count">{cdi.length}</span>
                  <span className="title">CDI</span>
                </div>
                <div className="type-cdd">
                  <span className="count">{cdd.length}</span>
                  <span className="title">CDD</span>
                </div>
                <div className="type-stage">
                  <span className="count">{stages.length}</span>
                  <span className="title">Stages</span>
                </div>
              </div>
              <div className="jobs">
                {currentPosts.map((job, index) => {
                  return (
                    <div className="job" key={index}>
                      <div className="image">
                        <img
                          src={`http://localhost:5000/images/${job.image}`}
                          alt=""
                        />
                      </div>
                      <div className="details">
                        <p className="department">{job.department}</p>
                        <p className="position">{job.poste}</p>
                        <div className="type-and-date">
                          <span className="type">{job.type}</span>
                          <p className="expiration-date">
                            Expire le {new Date().getDate()}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <PaginationJobs
                  totalPots={jobs.length}
                  postsPerPage={postPerPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recrutement;
