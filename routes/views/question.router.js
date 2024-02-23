const router = require("express").Router();

const { Question } = require("../../db/models");
const FlashcardPage = require("../../components/FlashcardPage");

router.get("/:id/:questionId", async (req, res) => {
  try {
    const { id } = req.params;
    const { questionId } = req.params;
    const questions = await Question.findAll({
      where: { id: questionId, categoryId: id },
    });

    if (questionId < 5) {
      res.send(res.renderComponent(FlashcardPage, { questions }));
    } else {
      res.redirect("/");
    }
  } catch ({ message }) {
    res.send(message);
  }
});
module.exports = router;
