const ErrorPage = require("../../components/Error");

const router = require("express").Router();

router.get("/*", async (req, res) => {
  try {
    res.status(404).send(res.renderComponent(ErrorPage));
  } catch ({ message }) {
    res.status(500).send({ error: message });
  }
});

module.exports = router;
