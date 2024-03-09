require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
var otpgenerator = require("otp-generator");
const Otp = require("../models/Otp");

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      gender,
      accountType,
      email,
      password,
      confirmPassword,
      otp,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !username ||
      !accountType ||
      !gender ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already Used",
      });
    }
    const usedUsername = await User.findOne({ username: username });
    if (usedUsername) {
      return res.status(409).json({
        success: false,
        message: "Username Not Available",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and ConfirmPassword do not match",
      });
    }

    const latestOTP = await Otp.findOne({ email }).sort({ createdAt: -1 });

    if (!latestOTP || otp !== latestOTP.otp) {
      return res.status(422).json({
        success: false,
        error: "The Otp is invalid.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      gender: gender,
      email: email,
      password: hashedPassword,
      accountType: accountType,
    });
    return res.status(200).json({
      success: true,
      details: newUser,
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password both are required",
      });
    }
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res.status(401).json({
        success: false,
        message: "User Not registered",
      });
    }
    const verifyPassword = await bcrypt.compare(password, findUser.password);
    if (!verifyPassword) {
      return res.status(403).json({
        success: false,
        message: "Wrong Password entered please try again",
      });
    }
    const user = await User.findOne({ email: email })
      .select("-password")
      .select("-createdAt")
      .select("-updatedAt");
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    user.token = token;
    const options = {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "Logged in Successfully",
      token: token,
      user: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      return res.status(401).json({
        success: false,
        error: "Email already exist",
      });
    }
    var otp = otpgenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    let result = Otp.findOne({ otp: otp });
    while (result) {
      otp = otpgenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      result = await Otp.findOne({ otp: otp });
    }
    const otpBody = Otp.create({ email: email, otp: otp });
    console.log(otpBody);
    res.status(200).json({
      success: true,
      message: "Otp Sent",
      otp: otpBody,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
