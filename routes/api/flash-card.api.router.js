const router = require("express").Router();
const { Question } = require("../../db/models");
const FlashcardItem = require("../../components/FlashcardItem");
const Congratulations = require("../../components/Congratulations");
router.post("/:id", async (req, res) => {
  try {
    const { answer } = req.body;
    const { id } = req.params;
    const rightAnswer = await Question.findOne({ where: { id } });
    if (answer === rightAnswer.answer) {
      const html = res.send(
        res.renderComponent(Congratulations, { doctype: false })
      );
      res.status(201).json({ message: "success", html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router
