const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Erur = require('../Model/Error');
const Availability_Schema = require('../Model/availability');


const availability  = async (req,res,next)=>{
    const driver_id = req.params.did;
    let avail_exist;
    try{
        avail_exist = await Availability_Schema.findOne({driver_id:driver_id});
      }catch(err){
        const error = new Erur(
          'Loggin in failed, please try again later.',
          500
        );
        return next(error);
      }
      if(avail_exist.availability == true){
        avail_exist.availability = false;
      }
      else{
        avail_exist.availability = true;

      }
      try {
        await avail_exist.save();
       } catch (err) {
         const error = new Erur(
           'Avail up failed, please try again later.',
           500
         );
         return next(error);
       }
 
      console.log(avail_exist);
      res.status(201).json({message: 'Edited in!'});

};
const login  = async (req,res,next)=>{
 
};
exports.availability = availability;
exports.login = login;
