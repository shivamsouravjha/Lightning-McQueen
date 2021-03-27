const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Erur = require('../Service_Model_stage2/Error');
const Building_material_Schema = require('../Service_Model_stage2/building_material');
const Wallcovering_Schema = require('../Service_Model_stage2/wallcovering');
const Survey_Schema = require('../Service_Model_stage2/survey');
const Rennovation_Schema = require('../Service_Model_stage2/rennovation');
const Roofing_Schema = require('../Service_Model_stage2/roofing');
const Plumbing_Schema = require('../Service_Model_stage2/plumbing');
const P_tools_Schema = require('../Service_Model_stage2/p_tools');
const Masonry_Schema = require('../Service_Model_stage2/masonry');
const HVAC_Schema = require('../Service_Model_stage2/hvac');
const Highway_Schema = require('../Service_Model_stage2/highway');
const Framing_Schema = require('../Service_Model_stage2/framing');
const Demolition_Schema = require('../Service_Model_stage2/demolition');


const verify  = async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new Erur('Invalid inputs passed, please check your data.', 422)
        );
    }
   

    const {zipcode,name, location,dob,phone,sex,password,aadhar,email,skill}= req.body;

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
    let existing_customer_email; 
    let existing_customer_phone; 
    try{
    existing_customer_email = await Logging_Schema.findOne({email:email});
      existing_customer_phone = await Logging_Schema.findOne({phone:phone});
    }catch(err){
        error = new Erur(
            'Signing up failed, please try again later.',
           500
          );
        return next(error);
    }
    if (existing_customer_email) {
        const error = new Erur(
          'Rider with this email exists already, please edit Email.',
          422
        );
        return next(error);
      }
    else if (existing_customer_phone){
        const error = new Erur(
          'Rider with this Phone exists already, please edit Phone.',
          422
        );
        return next(error);
      }
      const New_service_partner = new Logging_Schema({email,phone,password});
      let service_data;

       try {
        service_data=await New_service_partner.save();
        } catch (err) {
          const error = new Erur(
            'Signing up failed, please try again later.',
            500
          );
          return next(error);
        }
        service_id=service_data._id;
        let New_service_partner_DB;
      if(skill==="masonry")New_service_partner_DB= new Masonry_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill}); 
      else if(skill==="building_material")New_service_partner_DB= new Building_material_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="demolition")New_service_partner_DB= new Demolition_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="wallcovering")New_service_partner_DB= new Wallcovering_Schema({service_id,zipcode,name, location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="survey")New_service_partner_DB= new Survey_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="rennovation")New_service_partner_DB= new Rennovation_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="hvac")New_service_partner_DB= new HVAC_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="framing")New_service_partner_DB= new Framing_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="highway")New_service_partner_DB= new Highway_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="plumbing")New_service_partner_DB= new Plumbing_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="p_tools")New_service_partner_DB= new P_tools_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      else if(skill==="roofing")New_service_partner_DB= new Roofing_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email,skill});
      console.log(New_service_partner_DB);
      console.log("hgj");
      try {
          await New_service_partner_DB.save();
        } catch (err) {
            const error = new Erur(
              'Signing up failed at DB, please try again later.',
              500
            );
            return next(error);
          
            }

      res.status(201).json({ memer: New_service_partner_DB.toObject({ getters: true }) });
};

exports.verify = verify;

