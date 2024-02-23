const router = require("express").Router();
const { Question } = require("../../db/models");

router.post("/:id", async (req, res) => {
  try {
    const { answer } = req.body;
    console.log(answer);
    const { id } = req.params;
    console.log(id);
    const rightAnswer = await Question.findOne({ where: { id } });
    console.log(answer, rightAnswer.answer);
    if (answer === rightAnswer.answer) {
      res.json({ message: "ok" });
      //req.app.locals.user.score += 10;
    } else {
      res.json({ message: "не ок" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
