const loginService = require("../service/loginService");
const router = require("express").Router();

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