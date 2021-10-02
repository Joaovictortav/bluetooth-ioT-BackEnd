const router = require("express").Router();

router.get("/", (req, res, next) => {
    try {
        res.status(200).send(`<h1>Hey Socket.io</h1>`);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;