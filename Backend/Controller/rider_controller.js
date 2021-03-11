///const fs=require('fs');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Erur = require('../Model/Error');
const Driver_Schema = require('../model/driver_schema');
const Rider_Schema = require('../model/rider_schema');


const signup  = async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new Erur('Invalid inputs passed, please check your data.', 422)
        );
    }
    const {rider_name,email,phone,password,account,location}= req.body;
    let existing_rider_email; 
    let existing_rider_phone; 
    try{
        existing_rider_email = await Rider_Schema.findOne({email:email});
        existing_rider_phone = await Rider_Schema.findOne({phone:phone});
    }catch(err){
        error = new Erur(
            'Signing up failed, please try again later.',
           500
          );
        return next(error);
    }
    if (existing_rider_email) {
        const error = new Erur(
          'Rider with this email exists already, please edit Email.',
          422
        );
        return next(error);
      }
    if (existing_rider_phone) {
        const error = new Erur(
          'Rider with this Phone exists already, please edit Phone.',
          422
        );
        return next(error);
      }
    const New_Rider = new Rider_Schema({rider_name,email,phone,password,account,location});
    try {
        await New_Rider.save();
      } catch (err) {
        const error = new Erur(
          'Signing up failed, please try again later.',
          500
        );
        return next(error);
      }
    
      res.status(201).json({ memer: New_Rider.toObject({ getters: true }) });
};
const login  = async (req,res,next)=>{
  const {email,password}=req.body;
  let rider_existed;
  try{
    rider_existed = await Rider_Schema.findOne({email:email});
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
  res.status(201).json({message: 'Logged in!'});
};
exports.signup = signup;
exports.login = login;
