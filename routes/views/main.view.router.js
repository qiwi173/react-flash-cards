const router = require("express").Router();

const MainPage = require("../../components/ThemeList");
const ErrorPage = require("../../components/Error");

const { Category } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categoryes = await Category.findAll();
    const user = res.app.locals.user;
    res.send(
      res.renderComponent(MainPage, { title: "hello", categoryes, user })
    );
  } catch ({ message }) {
    res.send(message);
  }
});

router.get("/*", async (req, res) => {
  try {
    res.status(404).send(res.renderComponent(ErrorPage));
  } catch ({ message }) {
    res.status(500).send({ error: message });
  }
});
module.exports = router;
