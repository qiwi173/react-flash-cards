const Registration = require('../../components/Registration');


const router = require('express').Router();

router.get('/', (req, res) => {
  // рисует форму регистрации
  res.send(res.renderComponent(Registration));
});

module.exports = router;