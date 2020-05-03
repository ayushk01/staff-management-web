const functions = require("firebase-functions");
const app = require("express")();

// For Cross Origin Requests
const cors = require("cors");
app.use(cors());

// DB Reference
const { db } = require("./utils/admin");

// Handlers
const {
  signup,
  login,
  getUserInfo,
  getUserInfoByToken,
} = require("./handlers/users");

// Auth Routes
app.post("/signup", signup);
app.post("/login", login);
app.get("/getUserInfo", getUserInfo);
app.get("/getUserInfoByToken", getUserInfoByToken);
// API FORMAT : https://baseurl.com/api/
exports.api = functions.region("asia-northeast1").https.onRequest(app);
