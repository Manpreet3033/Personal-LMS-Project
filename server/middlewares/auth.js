require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    let token;
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (req.body && req.body.token) {
      token = req.body.token;
    } else if (
      req.header("Authorization") &&
      req.header("Authorization").replace("Bearer ", "")
    ) {
      token = req.header("Authorization").replace("Bearer ", "");
    }
    if (!token) {
      return res.status(401).json({ success: false, message: `Token Missing` });
    }
    try {
      const decode = await jwt.decode(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (err) {
      console.log(err.message);
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({
      success: false,
      message: `Something Went Wrong While Validating the Token`,
    });
  }
};
