const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../Middleware/file-upload');

const service_controller_stage1 = require('../Controller/service_controller_stage1');
const service_controller_stage2 = require('../Controller/service_controller_stage2');

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
  ],
  service_controller_stage1.signup
);
router.post(
  '/login',
  [
      
      check('password').isLength({ min: 8}), 
  ],
  service_controller_stage1.login
);

router.post(
  '/verification/:sid', fileUpload.fields([{
               name: 'aadhar', maxCount: 1},{
                name: 'profile_pic', maxCount: 1}])  ,                 ///sid = srviceman id
                service_controller_stage2.verify
);

module.exports = router;
