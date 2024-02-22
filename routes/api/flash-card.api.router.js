const router = require("express").Router();
const { Question } = require("../../db/models");
const FlashcardItem = require("../../components/FlashcardItem");
router.post("/:id", async (req, res) => {
  try {
    const { answer } = req.body;
    const {id}=req.params
    const rightAnswer=await Question.findOne({where:{id}})
    if(answer===rightAnswer.answer){

    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
