import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import Logo from "../../assets/images/Logo.jpg";
//
import ReactCountryFlag from "react-country-flag";
import { StoreContext } from "../../utilis/context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import translation from "../../utilis/translation/Components/translateNavbar";
import TableProfil from "../tableProfil/TableProfil";
import { FaLanguage } from "react-icons/fa";

const Navbar = () => {
  const [menuState, SetMenuState] = useState(false);
  const {
    language,
    setLanguage,
    showLogin,
    setShowLogin,
    token,
    setToken,
    showTableProfil,
    setShowTableProfil,
    currentUser,
    setCurrentUser,
  } = useContext(StoreContext);
  const [languageContainer, setLanguageContainer] = useState("");
  const [languageContainerMobile, setLanguageContainerMobile] = useState("");
  const [subListNav, setSubListNav] = useState("");
  const [sideNavMobile, setSideNavMobile] = useState("");
  const navigate = useNavigate();
  // const [allTags, setAllTags] = useState([]);
  // const [tableProfil, setTableProfil] = useState("");

  let translator = language == "fr" ? translation.fr : translation.en;
  // const currentLanguage = document.querySelector(".currentLanguage");
  // const languageContainer = document.querySelector(".languageContainer");

  useEffect(() => {
    setLanguageContainer(document.querySelector(".languageContainer"));
    setLanguageContainerMobile(
      document.querySelector(".languageContainerMobile")
    );
    setSubListNav(document.querySelector(".listMobile"));
    setSideNavMobile(document.querySelector(".sideNavMobile"));
    // setAllTags(document.body.querySelectorAll("body *"));
  }, []);

  // let translator = language == "fr"? translation.fr : translation.en

  const logOut = () => {
    setShowTableProfil(false);
    localStorage.removeItem("token");
    setToken("");
    return navigate("/");
  };

  const changeLanguageFr = () => {
    // setLanguage((prev) => (prev == "fr" ? "en" : "fr"));
    setLanguage(() => "fr");

    languageContainer.classList.contains("active")
      ? languageContainer.classList.remove("active")
      : languageContainer.classList.add("active");
    //
    languageContainerMobile.classList.contains("active")
      ? languageContainerMobile.classList.remove("active")
      : languageContainerMobile.classList.add("active");
  };

  const changeLanguageEn = () => {
    setLanguage(() => "en");

    languageContainer.classList.contains("active")
      ? languageContainer.classList.remove("active")
      : languageContainer.classList.add("active");

    languageContainerMobile.classList.contains("active")
      ? languageContainerMobile.classList.remove("active")
      : languageContainerMobile.classList.add("active");
  };

  const listLanguage = () => {
    // currentLanguage.classList.contains("list")
    //   ? currentLanguage.classList.remove("list")
    //   : currentLanguage.classList.add("list");
    // console.log(allTags);
    // console.log("tableProfil:", tableProfil);
    //
    languageContainer.classList.contains("active")
      ? languageContainer.classList.remove("active")
      : languageContainer.classList.add("active");
    //
    languageContainerMobile.classList.contains("active")
      ? languageContainerMobile.classList.remove("active")
      : languageContainerMobile.classList.add("active");
  };

  // Mobile Navbar dropdown
  const mobileDropdown = () => {
    subListNav.classList.contains("open")
      ? subListNav.classList.remove("open")
      : subListNav.classList.add("open");
  };

  function handleSideNavMobile() {
    sideNavMobile.classList.contains("open")
      ? sideNavMobile.classList.remove("open")
      : sideNavMobile.classList.add("open");
  }

  document.body.onclick = () => {};

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="firstNavbar">
          <div className="navTop">
            <span className="slogan">{translator.top.slogan}</span>
            <div className="languageContainer">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
                className="currentLanguage"
                onClick={listLanguage}
              >
                {language == "fr" ? (
                  <ReactCountryFlag countryCode="FR" svg />
                ) : (
                  <ReactCountryFlag countryCode="GB" svg />
                )}

                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  <span>{language == "fr" ? "Français" : "English"}</span>
                </span>
              </div>
              <div className="listDeroulanteConteneur">
                <div className="listDeroulante">
                  <FaLanguage
                    style={{
                      width: "40px",
                      height: "40px",
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "20px",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "10px 4px",
                      // borderBottom: "1px solid gray",
                      cursor: "pointer",
                      placeContent: "center",
                    }}
                    onClick={changeLanguageEn}
                  >
                    <ReactCountryFlag countryCode="GB" svg />
                    <span
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      English
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "10px 4px",
                      // borderBottom: "1px solid gray",
                      cursor: "pointer",
                      placeContent: "center",
                    }}
                    onClick={changeLanguageFr}
                  >
                    <ReactCountryFlag countryCode="FR" svg />
                    <span
                      style={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Français
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="ourLocation">
              <IoLocationOutline className="socialIcon" />
              {translator.top.localisation}
            </span>
            <div style={{ position: "relative" }}>
              <span
                className="sign-in"
                onClick={
                  !token
                    ? () => setShowLogin(true)
                    : () => setShowTableProfil(true)
                }
              >
                <IoPersonCircleSharp className="sign-in-icon" />
              </span>

              {showTableProfil ? (
                <TableProfil
                  setShowTableProfil={setShowTableProfil}
                  info={currentUser}
                  logOut={logOut}
                />
              ) : (
                <></>
              )}
            </div>
            {/* <span
              className="sign-in"
              onClick={
                !token
                  ? () => setShowLogin(true)
                  : // <div className="userInfo">some elements</div>
                    () => setShowTableProfil(true)
              }
            >
              <IoPersonCircleSharp className="sign-in-icon" />
            </span> */}
            <div className="others">
              <div className="social">
                <Link
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  to="https://web.facebook.com/AWSDAFRIQUE?mibextid=ZbWKwL&_rdc=1&_rdr"
                >
                  <FaFacebookF className="socialIcon" />
                </Link>
                <FaInstagram className="socialIcon" />
                <SlSocialTwitter className="socialIcon" />
                <Link
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  to="https://www.linkedin.com/company/africa-and-its-wealth-for-sustanable-development/"
                >
                  <FaLinkedinIn className="socialIcon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="navBottom">
            <img src={Logo} alt="logo" className="logo" />
            {/*  */}
            <ul className="menu">
              <li className="main">
                <Link to="/" className="LinkNav">
                  {translator.bottom.navigation[0]}
                </Link>
              </li>
              <li className="dropdown">
                {translator.bottom.navigation[1]}
                <ul className="list">
                  <li className="list-item">
                    <Link to="/projects" className="subLinkNav">
                      {translator.bottom.subNavigation[0]}
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link to="/organigramme" className="subLinkNav">
                      {translator.bottom.subNavigation[1]}
                    </Link>
                  </li>
                  <li className="list-item">
                    {translator.bottom.subNavigation[2]}
                  </li>
                  <li className="list-item">
                    {translator.bottom.subNavigation[3]}
                  </li>
                </ul>
              </li>
              <li className="main">
                <Link to="/news" className="LinkNav">
                  {translator.bottom.navigation[2]}
                </Link>
              </li>
              <li className="main">
                <Link to="/recrutement" className="LinkNav">
                  {translator.bottom.navigation[3]}
                </Link>
              </li>
              <li className="main">
                <Link to="/contact" className="LinkNav">
                  {translator.bottom.navigation[4]}
                </Link>
              </li>
            </ul>
            <div className="mybtn">{translator.donation}</div>
            <div className="nav-icon-menu" onClick={handleSideNavMobile}>
              <FiMenu className="nav-icon-menu-sub" />
            </div>
          </div>
        </div>
        <div className="second sideNavMobile">
          <ul className="menu">
            <li className="main">
              <Link to="/" className="LinkNav">
                {translator.bottom.navigation[0]}
              </Link>
            </li>
            <li className="dropdown">
              <span
                className="LinkNav"
                onClick={mobileDropdown}
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                {translator.bottom.navigation[1]}
                <FaAngleDown size={15} />
              </span>
              <ul className="listMobile">
                <li className="list-item">
                  <Link to="/projects" className="subLinkNav">
                    {translator.bottom.subNavigation[0]}
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/organigramme" className="subLinkNav">
                    {translator.bottom.subNavigation[1]}
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/organigramme" className="subLinkNav">
                    {translator.bottom.subNavigation[2]}
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/organigramme" className="subLinkNav">
                    {translator.bottom.subNavigation[3]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="main">
              <Link to="/news" className="LinkNav">
                {translator.bottom.navigation[2]}
              </Link>
            </li>
            <li className="main">
              <Link to="/recrutement" className="LinkNav">
                {translator.bottom.navigation[3]}
              </Link>
            </li>
            <li className="main">
              <Link to="/contact" className="LinkNav">
                {translator.bottom.navigation[4]}
              </Link>
            </li>
          </ul>
          <div className="languageContainerMobile">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
              className="currentLanguage"
              onClick={listLanguage}
            >
              {language == "fr" ? (
                <ReactCountryFlag countryCode="FR" svg />
              ) : (
                <ReactCountryFlag countryCode="GB" svg />
              )}

              <span
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                <span className="theLanguage">
                  {language == "fr" ? "Français" : "English"}
                </span>
              </span>
            </div>
            <div className="listDeroulante">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "7px 4px",
                  borderBottom: "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={changeLanguageEn}
              >
                <ReactCountryFlag countryCode="GB" svg />
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  English
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "7px 4px",
                  borderBottom: "1px solid gray",
                  cursor: "pointer",
                }}
                onClick={changeLanguageFr}
              >
                <ReactCountryFlag countryCode="FR" svg />
                <span
                  style={{
                    color: "black",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Français
                </span>
              </div>
            </div>
          </div>

          <div className="mybtn">{translator.donation}</div>
          <div className="nav-icon-close" onClick={handleSideNavMobile}>
            <ImCross className="nav-icon-close-sub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
