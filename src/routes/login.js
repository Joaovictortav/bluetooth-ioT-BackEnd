const bd = require("../config/configMysql");
const loginService = require("../service/loginService");
//const { app } = require("../config/configExpress");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).send(`<h1>Hey Socket.io</h1>`);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    loginService(req.body, (data, error) =>
      then((data) => {
        console.log(data);
      })
    );
    res.status(response.status).send(response.body);
  } catch (error) {
    console.log(error);
    res.status(400).send("Erro ao fazer requisição");
  }
});

module.exports = router;
