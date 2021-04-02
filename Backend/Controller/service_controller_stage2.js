const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Erur = require('../Service_Model_stage2/Error');
const Details_Schema = require('../Service_Model_stage2/Details');



const verify  = async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new Erur('Invalid inputs passed, please check your data.', 422)
        );
    }
    const service_id = req.params.sid;

    console.log("ftjxg");

    const {skill,location_of_work,education,emergency_name,phone,emergency_relation,emergency_email,experience,rate}= req.body;

   // console.log(typeof(name));
   // console.log(typeof(email));
  //  console.log(typeof(phone));
 // console.log(typeof(password));
  //  console.log(typeof(aadhar));
 //   console.log(typeof(location));
   /// console.log(typeof(dob));
   // //console.log(typeof(sex));
    ///console.log(typeof(skill));
    ///console.log(typeof(zipcode));
    console.log("serviceman_image");

    const  aadhar_image = req.files.aadhar[0].path;
    const serviceman_image = req.files.profile_pic[0].path;
    console.log(serviceman_image);

      let New_service_partner_DB = new Details_Schema({service_id,location_of_work,education,emergency_name,phone,emergency_relation,emergency_email,experience,rate,aadhar_image,serviceman_image,skill});
     
      try {
          await New_service_partner_DB.save();
        } catch (err) {
            const error = new Erur(
              'Verification failed, please try again later.',
              500
            );
            return next(error);
          
            }

      res.status(201).json({ memer: New_service_partner_DB.toObject({ getters: true }) });
};

exports.verify = verify;

