const express = require('express');
const { check } = require('express-validator');
//const fileUpload = require('../middleware/file-upload');

const rider_controller = require('../Controller/rider_controller');

const router = express.Router();

router.post(
  '/signup',
  [
    check('rider_name')
      .not()
      .isEmpty(),
      check('email')
      .normalizeEmail()
      .isEmail(),
      check('phone').isLength({ min: 10 ,max:10}),    
      check('password').isLength({ min: 8}), 
      check('account').isLength({ min: 12 ,max:12})
  ],
  rider_controller.signup
);
router.post(
  '/login',
  [
      check('email')
      .normalizeEmail()
      .isEmail(),
      check('password').isLength({ min: 8}), 
  ],
  rider_controller.login
);

module.exports = router;
