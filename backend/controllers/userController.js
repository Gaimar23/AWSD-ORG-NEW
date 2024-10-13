import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import fs from "fs";

//
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "this user doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Wrong email or password" });
    }

    const token = createToken(user._id);

    return res.json({
      success: true,
      token,
      info: [user.status, user.name, user.phone, user.email, user.image],
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking if user already exist
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    // validation of the user email and password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "The password can't be less than 8 characters",
      });
    }
    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({
      success: true,
      token,
      info: [user.status, user.name, user.phone, user.email, user.image],
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "An error occured" });
  }
};

// checking status
const checkStatus = async () => {};

// Getting user
const getUser = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId.id });
    let info = [
      userData.status,
      userData.name,
      userData.phone,
      userData.email,
      userData.image,
    ];
    return res.json({ success: true, info });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const singleUser = async (req, res) => {
  try {
    const { userId } = req.params;
    let user = await userModel.findById({ _id: userId });
    return res.json({
      success: true,
      user: [user._id, user.name, user.email, user.phone, user.image],
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phone } = req.body;

  let user_fileName = `${req.file.filename}`;
  try {
    const user = await userModel.findById({ _id: id });
    if (user.image != user_fileName) {
      fs.unlink(`uploads/${user.image}`, () => {});
      await userModel.findByIdAndUpdate(id, { image: req.file.filename });
    }

    if (password.length > 0) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "The password can't be less than 8 characters",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await userModel.findByIdAndUpdate(id, { password: hashedPassword });
    }
    await userModel.findByIdAndUpdate(id, {
      name: name,
      email: email,
      phone: phone,
    });
    return res.json({ success: true, message: "User updated..." });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await userModel.findById(id);
    fs.unlink(`uploads/${user.image}`, () => {});
    await userModel.findByIdAndDelete(id);
    return res.json({ success: true, message: "User deleted..." });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "error" });
  }
};

export { loginUser, registerUser, getUser, singleUser, updateUser, deleteUser };
