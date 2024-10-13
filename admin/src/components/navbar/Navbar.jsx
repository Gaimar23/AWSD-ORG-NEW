import React, { useContext } from "react";
import "./Navbar.scss";
import { assets } from "../../assets/assets";
import { MdWorkOutline } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { FiFilePlus } from "react-icons/fi";
import { DataContext } from "../../context/DataContext";

const Navbar = () => {
  const { jobList, listArticles } = useContext(DataContext);
  return (
    <div className="navbar">
      <div className="top">
        <p style={{ color: "white" }}>Des jours meilleurs...</p>
      </div>
      <div className="down">
        <img src={assets.logo2} alt="" className="logo" />
        <div className="right">
          <div className="icons">
            <div className="icon-container">
              <span className="count">{jobList.length}</span>
              <MdWorkOutline className="icon" />
            </div>
            <div className="icon-container">
              <span className="count">{listArticles.length}</span>
              <LuNewspaper className="icon" />
            </div>
            <div className="icon-container">
              <span className="count">16</span>
              <FiFilePlus className="icon" />
            </div>
          </div>
          <img src={assets.userProfil} alt="" className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
