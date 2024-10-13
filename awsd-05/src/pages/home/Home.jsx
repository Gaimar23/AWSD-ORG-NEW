import React, { useContext, useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import SwpHead from "../../components/swiperHead/SwpHead";
import Valeurs from "../../components/valeurs/Valeurs";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/goal.jpg";
import about4 from "../../assets/images/vision.png";
import about5 from "../../assets/images/values.jpg";

//
import environment from "../../assets/images/domaines/environment.jpg";
import health from "../../assets/images/domaines/health.jpg";
import independance from "../../assets/images/domaines/independance.jpg";
import learn from "../../assets/images/domaines/learn.jpg";
import violence from "../../assets/images/domaines/violence.jpg";
//
import { AiFillSafetyCertificate } from "react-icons/ai";
import Footer from "../../components/footer/Footer";
// Partenaires
import google from "../../assets/images/partenaires/google.png";
import bicec from "../../assets/images/partenaires/bicec.png";
import facebook from "../../assets/images/partenaires/facebook.png";
import uba from "../../assets/images/partenaires/uba.jpg";
import uber from "../../assets/images/partenaires/uber.jpg";
//
import { TiTick } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import Goals from "../../components/goals/Goals";
//

const Home = () => {
  const [aboutDesc, setAboutDesc] = useState("");
  const [aboutImg, setAboutImg] = useState("");

  useEffect(() => {
    setAboutDesc(document.querySelectorAll(".desc"));
    setAboutImg(document.querySelectorAll(".aboutImg"));
  }, []);

  const handleDescAbout = () => {
    console.log(aboutDesc);
  };

  const handleVision = () => {
    for (let i = 0; i < aboutDesc.length; i++) {
      if (aboutDesc[i].classList.contains("ourVision")) {
        if (!aboutDesc[i].classList.contains("active")) {
          aboutDesc[i].classList.add("active");
          //
          aboutImg[i].classList.add("active");
        }
      } else {
        aboutDesc[i].classList.contains("active") &&
          aboutDesc[i].classList.remove("active");
        //
        // console.log(aboutImg[i]);
        // console.log(aboutDesc[i]);
        aboutImg[i].classList.contains("active") &&
          aboutImg[i].classList.remove("active");
      }
    }
  };

  const handleMission = () => {
    // console.log("count");
    // console.log(aboutDesc);
    for (let i = 0; i < aboutDesc.length; i++) {
      if (aboutDesc[i].classList.contains("ourMission")) {
        if (!aboutDesc[i].classList.contains("active")) {
          aboutDesc[i].classList.add("active");
          //
          aboutImg[i].classList.add("active");
        }
      } else {
        aboutDesc[i].classList.contains("active") &&
          aboutDesc[i].classList.remove("active");
        //
        aboutImg[i].classList.contains("active") &&
          aboutImg[i].classList.remove("active");
      }
    }
  };

  const handleBelieves = () => {
    for (let i = 0; i < aboutDesc.length; i++) {
      if (aboutDesc[i].classList.contains("ourBelieves")) {
        if (!aboutDesc[i].classList.contains("active")) {
          aboutDesc[i].classList.add("active");
          //
          aboutImg[i].classList.add("active");
        }
      } else {
        aboutDesc[i].classList.contains("active") &&
          aboutDesc[i].classList.remove("active");
        //
        aboutImg[i].classList.contains("active") &&
          aboutImg[i].classList.remove("active");
      }
    }
  };

  const handleGoals = () => {
    for (let i = 0; i < aboutDesc.length; i++) {
      if (aboutDesc[i].classList.contains("ourGoals")) {
        if (!aboutDesc[i].classList.contains("active")) {
          aboutDesc[i].classList.add("active");
          //
          aboutImg[i].classList.add("active");
        }
      } else {
        aboutDesc[i].classList.contains("active") &&
          aboutDesc[i].classList.remove("active");
        //
        aboutImg[i].classList.contains("active") &&
          aboutImg[i].classList.remove("active");
      }
    }
  };

  document.body.onscroll = () => {
    // let top = window.scrollY;
    // let offset = about.offsetTop - 450;
    // let height = about.offsetHeight;
    //
    // if (top >= offset && top < offset + height) {
    //   aboutImage.classList.add("animated");
    //   aboutContent.classList.add("animated");
    //   aboutUs.classList.add("animated");
    //   setStudents(3000);
    //   setBrancheWorld(13);
    //   setGhanaBranches(2);
    // }
  };

  return (
    <div className="home">
      <section className="welcome">
        <Navbar />
        <SwpHead />
      </section>
      <section className="presentation">
        <div className="globalPresentation">
          <h1 className="title">
            A Propos de{" "}
            <span style={{ color: "green", borderBottom: "5px solid green" }}>
              AWSD
            </span>
          </h1>
          <p className="description">
            Notre association a été créée avec l’objectif ambitieux de
            participer à la transformation des attitudes, habitudes et aptitudes
            humaines à l’échelle nationale et internationale, en se concentrant
            sur les objectifs du développement durable.
          </p>
        </div>
      </section>
      <section className="about">
        <div className="globalAbout">
          <div className="title">
            <div className="gauche">
              <span className="vision mybtn" onClick={handleVision}>
                Notre Vision
              </span>
              <span className="mission mybtn" onClick={handleMission}>
                Notre Mission
              </span>
              <span className="valeurs mybtn" onClick={handleBelieves}>
                Nos valeurs
              </span>
              <span className="goals mybtn" onClick={handleGoals}>
                Nos Objectifs
              </span>
            </div>
            {/* <div className="droit">
          </div> */}
          </div>
          <div className="containerAbout">
            <div className="left">
              <img
                src={about4}
                alt=""
                className="ourVision aboutImg active"
                // style={{ display: "none" }}
              />
              <img
                src={about1}
                alt=""
                className="ourMission aboutImg"
                // style={{ display: "none" }}
              />
              <img
                src={about5}
                alt=""
                className="ourBelieves aboutImg"
                // style={{ display: "none" }}
              />
              <img
                src={about3}
                alt=""
                className="ourGoals aboutImg"
                // style={{ display: "none" }}
              />
            </div>
            <div className="right">
              <p
                className="ourVision desc active"
                style={{ opacity: "0.7", color: "rgb(116, 116, 116)" }}
              >
                Notre Vision est de fournir une assistance de qualité, un
                transfert de compétences et un renforcement de capacités par
                l'intermédiaire de spécialistes et d'experts en dévéloppement
                issus de grandes écoles et des personnes fortement motivées .
              </p>
              <p
                className="ourMission desc"
                style={{ opacity: "0.7", color: "rgb(116, 116, 116)" }}
              >
                Notre mission est de promouvoir activement le développement
                durable en mettant en œuvre des projets et des initiatives qui
                visent à résoudre les défis environnementaux, sociaux et
                économiques.
              </p>
              <div className="ourBelieves desc" style={{ textAlign: "center" }}>
                {/* <div className="belief">
                  <TiTickOutline size={50} color="black" />
                  <span className="beliefTitle">Intégrité</span>
                </div>
                <div className="belief">
                  <TiTickOutline size={50} color="black" />
                  <span className="beliefTitle">Collaboration</span>
                </div>
                <div className="belief">
                  <TiTickOutline size={50} color="black" />
                  <span className="beliefTitle">Durabilité</span>
                </div>
                <div className="belief">
                  <TiTickOutline size={50} color="black" />
                  <span className="beliefTitle">Inclusion</span>
                </div>
                <div className="belief">
                  <TiTickOutline size={50} color="black" />
                  <span className="beliefTitle">Respect</span>
                </div> */}
                <Valeurs />
              </div>
              <div className="ourGoals desc" style={{ textAlign: "center" }}>
                {/* I would like to begin by extending my sincerest thanks to the
                worthy sons and daughters of Fussep from the homeland and the
                Diaspora who tirelessly work for the development and radiance of
                our village throughout the world. */}
                <Goals />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="domaines">
        <div className="globalDomaines">
          <h1 className="title">
            Nos{" "}
            <span style={{ color: "green", borderBottom: "5px solid green" }}>
              Domaines
            </span>
          </h1>
          <div className="cardContainer">
            <div className="subContainer">
              <div className="card">
                <span className="info">
                  Education de la Petite Enfance
                  <br /> et de la Jeune Fille
                </span>
                <img src={learn} alt="Education" className="imageCard" />
                <div className="cercle">
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                </div>
              </div>
              <div className="card">
                <span className="info">
                  Violence Basée sur le Genre
                  <br /> (CBG)
                </span>
                <img src={violence} alt="Violence" className="imageCard" />
                <div className="cercle">
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                </div>
              </div>
              <div className="card">
                <span className="info">
                  Santé, Nutrition & EHA
                  <br />
                  (Eau, Hygiène, Assainissement)
                </span>
                <img src={health} alt="Santé" className="imageCard" />
                <div className="cercle">
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                </div>
              </div>
              <div className="card">
                <span className="info">
                  Autonomisation de
                  <br /> la Femme
                </span>
                <img src={independance} alt="Autonomie" className="imageCard" />
                <div className="cercle">
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                </div>
              </div>
              <div className="card">
                <span className="info">
                  Protection de
                  <br /> l'environnement
                </span>
                <img
                  src={environment}
                  alt="Environement"
                  className="imageCard"
                />
                <div className="cercle">
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                  <AiFillSafetyCertificate className="subCercle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partenaires">
        <div className="globalPartenaires">
          <h2 className="title">
            Nos{" "}
            <span style={{ color: "green", borderBottom: "5px solid green" }}>
              Partenaires
            </span>
          </h2>
          <h2 className="title02"></h2>
          <div className="theSlider">
            <div className="slide-track">
              {/* <div className="slide">
                <img
                  src={bicec}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={facebook}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={google}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={uba}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={uber}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div> */}
              {/* Copy */}
              <img
                src={bicec}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={facebook}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={google}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uba}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uber}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
            </div>

            <div className="slide-track">
              <img
                src={bicec}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={facebook}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={google}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uba}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uber}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
            </div>
          </div>
          <div className="theSlider02">
            <div className="slide-track">
              {/* <div className="slide">
                <img
                  src={bicec}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={facebook}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={google}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={uba}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div>
              <div className="slide">
                <img
                  src={uber}
                  alt=""
                  height={100}
                  width={250}
                  className="slideImg"
                />
              </div> */}
              {/* Copy */}
              <img
                src={bicec}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={facebook}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={google}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uba}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uber}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
            </div>

            <div className="slide-track">
              <img
                src={bicec}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={facebook}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={google}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uba}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
              <img
                src={uber}
                alt=""
                height={100}
                width={250}
                className="slideImg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
