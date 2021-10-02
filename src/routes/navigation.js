const authMidleware = require('../authMidleware');
const router = require("express").Router();

router.get("/", authMidleware, (req, res, next) => {
    try {
        res.status(200).send(`<h1>Hey Socket.io</h1>`);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;