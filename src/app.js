const router_login = require("./routes/login");
const router_navigation = require('./routes/navigation');
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/login", router_login);
app.use("/home", router_navigation);

module.exports = app;