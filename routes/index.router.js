const router = require("express").Router();

const mainViewRouter = require("./views/main.view.router.js");

router.use("/", mainViewRouter);

module.exports = router;