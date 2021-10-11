const router_login = require("../routes/login");
const router_authentication = require("../routes/canActivate");
const router_navigation = require('../routes/navigation');

const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

// app.get("/", (req, res, next) => {
//     res.status(200).send("<h1>TESTANDO</h1>");
// });

app.use("/", router_authentication);
app.use("/login", router_login); app.use("/home", router_navigation);

module.exports = app;