import React, { useContext, useEffect, useState } from "react";
import "./JobAdd.scss";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { DataContext } from "../../context/DataContext";

const JobAdd = () => {
  const [image, setImage] = useState(false);
  const { list, setJobList } = useContext(DataContext);
  const [data, setData] = useState({
    poste: "",
    department: "",
    reference: "",
    contrat: "",
    education: "",
    localisation: "",
    type: "",
    description: "",
  });

  useEffect(() => {
    console.log(image);
  }, [image]);

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onsubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("poste", data.poste);
    formData.append("department", data.department);
    formData.append("reference", data.reference);
    formData.append("contrat", data.contrat);
    formData.append("education", data.education);
    formData.append("localisation", data.localisation);
    formData.append("type", data.type);
    formData.append("description", data.description);
    formData.append("image", image);

    const response = await axios.post(
      "http://localhost:5000/api/job/add",
      formData
    );
    if (response.data.success) {
      setData({
        poste: "",
        department: "",
        reference: "",
        contrat: "",
        education: "",
        localisation: "",
        type: "",
        description: "",
      });
      setImage(false);
      toast.success(response.data.message);
      list();
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="job-add">
      <form className="job-form" onSubmit={onsubmitHandler}>
        <div className="job-head">
          <div className="upload-image-job">
            {/* <p>Upload image</p> */}
            <label htmlFor="imageJob">
              <img
                className="job-img"
                src={image ? URL.createObjectURL(image) : assets.jobDefault}
                alt=""
              />
            </label>
            <input
              type="file"
              required
              id="imageJob"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="title">
            <input
              type="text"
              name="poste"
              placeholder="Poste"
              className="title-input"
              value={data.poste}
              onChange={onchangeHandler}
            />
            <div className="detail">
              <div className="left">
                <input
                  type="text"
                  name="department"
                  placeholder="Département"
                  className="title-input"
                  value={data.department}
                  onChange={onchangeHandler}
                />
                <input
                  type="text"
                  name="reference"
                  placeholder="Reference"
                  className="title-input"
                  value={data.reference}
                  onChange={onchangeHandler}
                />
                <input
                  type="text"
                  name="contrat"
                  placeholder="Nature Contrat"
                  className="title-input"
                  value={data.contrat}
                  onChange={onchangeHandler}
                />
              </div>
              <div className="right">
                <input
                  type="text"
                  name="education"
                  placeholder="Niveau d'étude"
                  className="title-input"
                  value={data.education}
                  onChange={onchangeHandler}
                />
                <input
                  type="text"
                  name="localisation"
                  placeholder="Localisation"
                  className="title-input"
                  value={data.localisation}
                  onChange={onchangeHandler}
                />
                <input
                  type="text"
                  name="type"
                  placeholder="Type de contrat"
                  className="title-input"
                  value={data.type}
                  onChange={onchangeHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <textarea
          name="description"
          placeholder="job description"
          className="description"
          rows={6}
          value={data.description}
          onChange={onchangeHandler}
        ></textarea>
        <button type="submit" className="publish-job">
          Publish
        </button>
      </form>
    </div>
  );
};

export default JobAdd;
