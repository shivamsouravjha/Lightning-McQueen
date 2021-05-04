const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../Middleware/file-upload');
const customer_controller = require('../Controller/customer_controller');

const router = express.Router();

router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
      check('email')
      .normalizeEmail()
      .isEmail(),
      check('phone').isLength({ min: 10 ,max:10}),    
      check('password').isLength({ min: 8}),
      check('sanswer').not().isEmpty(),
      check('city').not().isEmpty()
  ],customer_controller.signup
);
router.post(
  '/login',
  [
    check('password').isLength({ min: 8}), 
  ],customer_controller.login
);

module.exports = router;
