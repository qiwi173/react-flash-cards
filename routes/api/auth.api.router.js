
const { User } = require('../../db/models');

const router = require('express').Router();

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    if (user) {
      res.app.locals.user = user;
      res.redirect('/');
      return;
    }
    res.status(400).json({ error: 'Не все поля заполнены' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;