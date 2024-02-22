const router = require("express").Router();

const { Question } = require("../../db/models");
const FlashcardPage = require("../../components/FlashcardPage");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const flashcard = Question.findOne({ where: { id } });
  res.send(res.renderComponent(FlashcardPage, { flashcard }));
});
module.exports = router;
