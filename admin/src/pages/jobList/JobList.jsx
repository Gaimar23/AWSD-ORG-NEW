import React, { useContext, useEffect, useState } from "react";
import "./JobList.scss";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";
import { DataContext } from "../../context/DataContext";

const JobList = () => {
  const { jobList, setJobList, url, removeJob, list } = useContext(DataContext);

  return (
    <div className="job-list">
      {/* <h3 style={{ color: "white" }}>Jobs List</h3> */}
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Position</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {jobList.map((job, index) => {
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/${job.image}`} alt="" />
              <b>{job.poste}</b>
              <b>{job.department}</b>
              <b style={{ display: "flex", gap: "30px" }}>
                {" "}
                <MdDeleteOutline
                  className="action-icon"
                  onClick={() => removeJob(job._id, list)}
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

export default JobList;
