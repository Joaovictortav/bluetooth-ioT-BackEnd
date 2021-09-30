const router_login = require("./routes/login");

const express = require("express");
const cors = require("cors");
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/login", router_login);

module.exports = app;
