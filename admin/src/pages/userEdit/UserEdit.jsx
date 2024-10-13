import React, { useEffect, useState } from "react";
import "./UserEdit.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const UserEdit = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  const singleUser = async () => {
    const response = await axios.post(
      `http://localhost:5000/api/user/single/${userId}`
    );
    if (response.data.success) {
      setUser(response.data.user);
      // console.log(response.data.user);
      setData({
        ...data,
        name: response.data.user[1],
        email: response.data.user[2],
        phone: response.data.user[3],
      });
      setImage(response.data.user[4]);
    }
  };

  const updateUser = async (event) => {
    event.preventDefault();

    if (!image || image.length == 0) {
      return toast.error("Svp l'Image");
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("image", image);

    const response = await axios.post(
      `http://localhost:5000/api/user/update/${userId}`,
      formData
    );
    if (response.data.success) {
      setData({
        name: "",
        email: "",
        password: "",
        phone: "",
      });
      setImage(false);
      toast.success(response.data.message);
      navigate("/users/list");
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    singleUser();
  }, []);

  let isUser = user.length > 0 ? true : false;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="user-edit">
      {!isUser ? (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      ) : (
        <form className="user-form" onSubmit={updateUser}>
          <div className="image-container">
            <label htmlFor="img-profile">
              <img
                src={
                  !image
                    ? assets.jobDefault
                    : image.length
                    ? `http://localhost:5000/images/${image}`
                    : URL.createObjectURL(image)
                }
                // src={assets.jobDefault}
                alt=""
                className="user-image"
              />
            </label>
            <input
              type="file"
              id="img-profile"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="inputs">
            <input
              type="text"
              name="name"
              placeholder="Fullname"
              value={data.name}
              onChange={onChangeHandler}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={onChangeHandler}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={data.phone}
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UserEdit;
