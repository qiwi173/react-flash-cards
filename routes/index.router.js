const router = require("express").Router();
const authViewRouter=require("./views/auth.view.router.js")
const mainViewRouter = require("./views/main.view.router.js");
const flashcardPageViewRouter = require('./views/question.router.js')
const profileViewRouter = require('./views/profile.view.router.js')
const errorViewRouter = require('./views/404.view.js')

const flashCardApiRouter=require('./api/flash-card.api.router.js')
const authApiRouter=require("./api/auth.api.router.js")

router.use("/", mainViewRouter);
router.use('/topic', flashcardPageViewRouter)
router.use('/auth/registration',authViewRouter)
router.use('/profile', profileViewRouter)
router.use('/*', errorViewRouter)

router.use('/api/topic', flashCardApiRouter)
router.use("/api/auth",authApiRouter)
module.exports = router;