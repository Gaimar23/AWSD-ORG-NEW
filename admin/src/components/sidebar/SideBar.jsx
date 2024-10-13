import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { MdWorkOutline } from "react-icons/md";
import { PiStackPlus } from "react-icons/pi";
import { LuNewspaper } from "react-icons/lu";
import { FiFilePlus } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/jobs/add" className="sidebar-option">
          <PiStackPlus className="icon" />
          <p>Add Job</p>
        </NavLink>
        <NavLink to="/jobs/list" className="sidebar-option">
          <MdWorkOutline className="icon" />
          <p>List Jobs</p>
        </NavLink>
        <NavLink to="/news/add" className="sidebar-option">
          <FiFilePlus className="icon" />
          <p>Add Article</p>
        </NavLink>
        <NavLink to="/news/list" className="sidebar-option">
          <LuNewspaper className="icon" />
          <p>List Articles</p>
        </NavLink>
        <NavLink to="/users/add" className="sidebar-option">
          <FaUserEdit className="icon" />
          <p>Add User</p>
        </NavLink>
        <NavLink to="/users/list" className="sidebar-option">
          <FaUsers className="icon" />
          <p>List Users</p>
        </NavLink>
        <div className="sidebar-down">
          <TbLogout className="icon" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
