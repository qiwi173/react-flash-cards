const router = require("express").Router();

const MainPage = require("../../components/ThemeList");

const { Category } = require("../../db/models");

router.get("/", async (req, res) => {
try {
  const categoryes = await Category.findAll();
  res.send(res.renderComponent(MainPage, { title: "hello", categoryes }));
} catch ({message}) {
  res.send(message)
  
}
});
module.exports = router;




