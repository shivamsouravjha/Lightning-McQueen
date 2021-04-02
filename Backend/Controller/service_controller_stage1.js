const fs = require('fs');
var path = require('path');

const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Erur = require('../Service_Model_stage2/Error');
const Logging_Schema = require('../service_model_stage1.js/logging');
const Service_Schema = require('../service_model_stage1.js/service');
const Verifivation_Schema = require('../service_model_stage1.js/verifivation');
const Address_Schema = require('../service_model_stage1.js/address');


const signup  = async (req,res,next)=>{
    const errors = validationResult(req);
  // /console.log(phone);
  //  console.log(password);
  //  console.log(aadhar);
   // console.log(location);
  ///   console.log(dob);
  ///  console.log(sex);
  ///  console.log(zipcode);
    if (!errors.isEmpty()) {
      console.log("error");
        return next(
          new Erur('Invalid inputs passed, please check your data.', 422)
        );
    }
   

    const {zipcode,name,location,dob,phone,sex,password,aadhar,email}= req.body;
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
        const verification=false;
        New_service_partner_DB= new Service_Schema({service_id,zipcode,name,location,dob,phone,sex,password,aadhar,email}); 
        New_service_partner__verification= new Verifivation_Schema({service_id,verification}); 
     
      console.log(New_service_partner_DB);
      try {
        await New_service_partner_DB.save();
        await New_service_partner__verification.save();
      } catch (err) {
            const error = new Erur(
              'Signing up failed at DB, please try again later.',
              500
            );
            return next(error);
          
            }

      res.status(201).json({ memer: New_service_partner_DB.toObject({ getters: true }) });
};




const login  = async (req,res,next)=>{
  const {entry,password}=req.body;
  let rider_existed;
  try{
    rider_existed = await Logging_Schema.findOne({email:entry});
    if(!rider_existed){
      rider_existed = await Logging_Schema.findOne({phone:entry});

    }
  }catch(err){
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }
  if(!rider_existed || rider_existed.password != password){
    const error = new Erur(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }
  console.log(rider_existed);
  res.json({message: 'Logged in!',
    rider: rider_existed.toObject({ getters: true })});
};








const address  = async (req,res,next)=>{
  
 
  const service_id = req.params.sid;
  const {village,post, ps,block,pnumber}= req.body;
  
  
      let New_service_partner_address;
      New_service_partner_address= new Address_Schema({service_id,village,post, ps,block,pnumber}); 
   
    try {
      await New_service_partner_address.save();
    } catch (err) {
          const error = new Erur(
            'Signing up failed at DB, please try again later.',
            500
          );
          return next(error);
        
          }

    res.status(201).json({ memer: New_service_partner_address.toObject({ getters: true }) });
};

const step2_verification  = async (req,res,next)=>{
  const service_id = req.params.sid;

  ///console.log(req.files.profile_pic[0]);
 /// const images = new Img_model({image:aadhar_image})
    try{
      //images.save();
    }catch (err) {
      const error = new HttpError(
        'Creating place failed, please try again.',
        500
      );
      return next(error);
    }
   
};
exports.signup = signup;
exports.login = login;
exports.address = address;
