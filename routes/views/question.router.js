const router = require("express").Router();

const { Question } = require("../../db/models");
const FlashcardPage = require("../../components/FlashcardPage");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const { questionId } = req.params;
    const question = await Question.findOne({
      where: { categoryId: id },
    });

    if (question) {
      res.send(res.renderComponent(FlashcardPage, { question }));
    } else {
      res.redirect("/");
    }
  } catch ({ message }) {
    res.send(message);
  }
});

router.get("/:id/:questionId", async (req, res) => {
  try {
    const { id } = req.params;
    const { questionId } = req.params;
    const question = await Question.findOne({
      where: { categoryId: id, id: questionId },
    });
    if (question) {
      res.send(res.renderComponent(FlashcardPage, { question }));
    } else {
      res.redirect("/profile");
    }
  } catch ({ message }) {
    res.send(message);
  }
});
module.exports = router;
