var fs = require('fs');
var path = require('path');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Service_Schema = require('../customer_Model/customerschema');
const Order_Schema = require('../customer_Model/formorder');

const Erur = require('../Service_Model_stage2/Error');

const signup  = async (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new Erur('Invalid inputs passed, please check your data.', 422)
        );
    }
    const {name,email,phone,password,city,sanswer}= req.body;
    let existing_customer_email; 
    let existing_customer_phone; 
 
    try{
        existing_customer_email = await Service_Schema.findOne({email:email});
        existing_customer_phone = await Service_Schema.findOne({phone:phone});
    }catch(err){
        error = new Erur(
            'Signing up failed, please try again later.',
           500
          );
        return next(error);
    }
    if (existing_customer_email) {
        const error = new Erur(
          'customer with this email exists already, please edit Email.',
          422
        );
        return next(error);
      }
      if (existing_customer_phone) {
        const error = new Erur(
          'customer with this Phone exists already, please edit Phone.',
          422
        );
        return next(error);
      } 
    const New_customer = new Service_Schema({name,email,phone,password,city,sanswer});
    console.log(New_customer)
   let created_customer;
    try {
      created_customer= await New_customer.save();
      } catch (err) {
        const error = new Erur(
          'Signing up failed, please try again later.',
          500
        );
        return next(error);
      }
 
      res.status(201).json({ customer: created_customer.toObject({ getters: true }) });
};
const login  = async (req,res,next)=>{
  const {email,password}=req.body;
  let customer_existed;
  try{
    customer_existed = await Service_Schema.findOne({email:email});
    
  }catch(err){
    const error = new Erur(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }
  if(!customer_existed || customer_existed.password != password){
    const error = new Erur(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }
  res.json({
        message: 'Logged in!',
        driver: customer_existed.toObject({ getters: true })
      });
    };
const form  = async (req,res,next)=>{
    const service_did = req.params.did;
    const {resources,duration,location,startDate,skill}= req.body;
    let New_Order_;
    try{
      existing_customer_name = await Service_Schema.findOne({_id:service_did});
  }catch(err){
      error = new Erur(
          'Signing up failed, please try again later.',
         500
        );
      return next(error);

  }        
  const phone = existing_customer_name['phone']
  const name = existing_customer_name['name']
  const New_Order = new Order_Schema({resources,duration,location,startDate,skill,phone,name});
  try {
      New_Order_= await New_Order.save();
      } catch (err) {

        const error = new Erur(
          'Signing up failed, please try again later.',
          500
        );
        return next(error);
      }
      res.json({
            message: 'Logged in!',
            driver: New_Order.toObject({ getters: true })
          });
        };
exports.signup = signup;
exports.login = login;
exports.form = form;
