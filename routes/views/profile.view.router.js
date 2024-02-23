
const profile = require("../../components/Profile");
const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const { name } = req.app.locals.user;
    const user = await User.findOne({ raw: true, where: { name } });
    res.send(res.renderComponent(profile, { user }));
  } catch ({ message }) {
    res.status(500).send({ error: message });
  }
});
module.exports = router;
