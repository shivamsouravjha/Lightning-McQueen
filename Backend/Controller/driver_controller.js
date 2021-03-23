///const fs=require('fs');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Erur = require('../Service_Model/Error');
const Rider_Schema = require('../Service_Model/masonry');
const Availability_Schema = require('../Service_Model/availability');

const signup  = async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new Erur('Invalid inputs passed, please check your data.', 422)
        );
    }
    const {driver_name,email,phone,password,car_number,account,location}= req.body;
    let existing_driver_email; 
    let existing_driver_phone; 
    let existing_car_number;
 
    try{
        existing_driver_email = await Driver_Schema.findOne({email:email});
        existing_driver_phone = await Driver_Schema.findOne({phone:phone});
        existing_car_number = await Driver_Schema.findOne({car_number:car_number});
    }catch(err){
        error = new Erur(
            'Signing up failed, please try again later.',
           500
          );
        return next(error);
    }
    if (existing_driver_email) {
        const error = new Erur(
          'Driver with this email exists already, please edit Email.',
          422
        );
        return next(error);
      }
      if (existing_driver_phone) {
        const error = new Erur(
          'Driver with this Phone exists already, please edit Phone.',
          422
        );
        return next(error);
      }  if (existing_car_number) {
        const error = new Erur(
          'Driver with this Car Number exists already, please edit Car Number.',
          422
        );
        return next(error);
      }
    const New_driver = new Driver_Schema({driver_name,email,phone,password,car_number,account,location});
    let created_driver;
    try {
      created_driver= await New_driver.save();
      } catch (err) {
        const error = new Erur(
          'Signing up failed, please try again later.',
          500
        );
        return next(error);
      }
    const driver_id = created_driver._id;
    const availability= 'false';
    const New_avail = new Availability_Schema({driver_id,availability});

    try {
       await New_avail.save();
      } catch (err) {
        const error = new Erur(
          'Avail up failed, please try again later.',
          500
        );
        return next(error);
      }
 
      res.status(201).json({ driver: New_driver.toObject({ getters: true }) });
};
const login  = async (req,res,next)=>{
  const {email,password}=req.body;
  let driver_existed;
  let avail_exist;
  try{
    driver_existed = await Driver_Schema.findOne({email:email});
    const driver_id = driver_existed._id;
    avail_exist = await Availability_Schema.findOne({driver_id:driver_id});
  }catch(err){
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }
  if(!driver_existed || driver_existed.password != password){
    const error = new Erur(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }
  const availability= 'true';
  avail_exist.availability=availability;

    try {
       await avail_exist.save();
      } catch (err) {
        const error = new Erur(
          'Avail up failed, please try again later.',
          500
        );
        return next(error);
      }

      res.json({
        message: 'Logged in!',
        driver: driver_existed.toObject({ getters: true })
      });};
exports.signup = signup;
exports.login = login;
