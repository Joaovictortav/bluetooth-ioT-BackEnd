const loginService = require("../service/loginService");
const authMidleware = require('../authMidleware');
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
        loginService(req.body, (response) => {
            res.status(response.status).json(response);
        });
    } catch (error) {
        res.status(400).send("Erro ao fazer requisição: " + error);
    }
});

module.exports = router;