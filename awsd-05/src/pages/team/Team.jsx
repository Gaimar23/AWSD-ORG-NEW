import React from "react";
import "./team.scss";
import Navbar from "../../components/navbar/Navbar";
//
import team01 from "../../assets/images/team/teammate01.png";
import team02 from "../../assets/images/team/teammate02.png";
import team03 from "../../assets/images/team/teammate03.png";
import team04 from "../../assets/images/team/teammate04c.png";
import team05 from "../../assets/images/team/teammate05.png";
import team06 from "../../assets/images/team/teammate06.png";
import { IoMdShare } from "react-icons/io";
import SwiperTeam from "../../components/swpTeam/SwiperTeam";
//
import Footer from "../../components/footer/Footer";
//

const Team = () => {
  return (
    <div className="team">
      <Navbar />
      <SwiperTeam />
      <div className="teamList">
        <div className="globalList">
          <div className="listContainer">
            <div className="item">
              <div className="image">
                <span className="icon">
                  <IoMdShare size={25} color="white" />
                </span>
                <img src={team01} alt="profile" className="img" />
              </div>
              <div className="description">
                <span className="name">Aziz TCHAMBOU</span>
                <span className="position">ingénieur</span>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <span className="icon">
                  <IoMdShare size={25} color="white" />
                </span>
                <img src={team02} alt="profile" className="img" />
              </div>
              <div className="description">
                <span className="name">Aurlie BOUGHA</span>
                <span className="position">ingénieur</span>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <span className="icon">
                  <IoMdShare size={25} color="white" />
                </span>
                <img src={team03} alt="profile" className="img" />
              </div>
              <div className="description">
                <span className="name">Bertand SIMO</span>
                <span className="position">ingénieur</span>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <span className="icon">
                  <IoMdShare size={25} color="white" />
                </span>
                <img
                  src={team04}
                  alt="profile"
                  className="img"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div className="description">
                <span className="name">Edouard FOTSING</span>
                <span className="position">ingénieur</span>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <span className="icon">
                  <IoMdShare size={25} color="white" />
                </span>
                <img src={team05} alt="profile" className="img" />
              </div>
              <div className="description">
                <span className="name">Anita KAMGA</span>
                <span className="position">ingénieur</span>
              </div>
            </div>
            <div className="item">
              <div className="image">
                <span className="icon">
                  <IoMdShare size={25} color="white" />
                </span>
                <img src={team06} alt="profile" className="img" />
              </div>
              <div className="description">
                <span className="name">Alexa TOUKAM</span>
                <span className="position">ingénieur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
