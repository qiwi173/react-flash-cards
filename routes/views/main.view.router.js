const router = require("express").Router();

const MainPage = require("../../components/ThemeList");

const { Category } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categoryes = await Category.findAll();
     const user = res.app.locals.user;
     console.log(user);
   // res.app.locals.user = user;
    res.send(
      res.renderComponent(MainPage, { title: "hello", categoryes, user })
    );
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
