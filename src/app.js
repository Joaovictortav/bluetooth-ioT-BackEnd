const router_login = require("./routes/login");
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/login", router_login);

module.exports = app;