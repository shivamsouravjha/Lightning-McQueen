const express = require('express');
const { check } = require('express-validator');
//const fileUpload = require('../middleware/file-upload');

const booking_controller = require('../controller/booking_controller');

const router = express.Router();


router.post(
  '/signup',
  [
    check('driver_name')
      .not()
      .isEmpty(),
      check('email')
      .normalizeEmail()
      .isEmail(),
      check('phone').isLength({ min: 10 ,max:10}),    
      check('password').isLength({ min: 8}), 
      check('car_number').isLength({ min: 10 ,max:10}),
      check('account').isLength({ min: 12 ,max:12})
  ],
 // booking_controller.signup
);
router.post(
  '/login',
  [
      check('email')
      .normalizeEmail()
      .isEmail(),
      check('password').isLength({ min: 8}), 
  ],
  //driver_controller.login
);



module.exports = router;
