const router = require("express").Router();

const mainViewRouter = require("./views/main.view.router.js");
const flashcardPageViewRouter = require('./views/FlashcardPage.view.router.js')

router.use("/", mainViewRouter);
router.use('/first-topic', flashcardPageViewRouter)

module.exports = router;