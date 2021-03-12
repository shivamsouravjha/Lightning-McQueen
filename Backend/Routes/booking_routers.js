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
  router.post(
    '/:uid',          ////uid =user ID
    booking_controller.booking
  );
  router.get(
    '/historyuid/:uid',          ////uid =user ID
    booking_controller.history_uid
  );
  router.get(
    '/historydid/:did',          ////uid =user ID
    booking_controller.history_did
  );
  router.get(
    '/availcabs',          ////uid =user ID
    booking_controller.avail_cabs
  );
    
  router.post(
    '/end/:uid',          ////uid =user ID
    booking_controller.end
  );
    


module.exports = router;
