const express = require('express');
const { check } = require('express-validator');
//const fileUpload = require('../middleware/file-upload');

const booking_controller = require('../controller/booking_controller');

const router = express.Router();


router.post(
  '/avail/:did',          ////driver id =did
  booking_controller.availability
);
router.post(
  '/location/:did',
  booking_controller.update_location
);



module.exports = router;
