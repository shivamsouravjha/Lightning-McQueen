const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Erur = require('../Model/Error');
const Availability_Schema = require('../Model/availability');
const Driver_Schema = require('../model/driver_schema');
const Rider_Schema = require('../model/rider_schema');


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
 
      res.status(201).json({message: 'Updated'});

};
const update_location  = async (req,res,next)=>{
    const _id = req.params.did;
    let location_update;
    try{
        location_update = await Driver_Schema.findOne({_id:_id});
      }catch(err){
        const error = new Erur(
          'Loggin in failed, please try again later.',
          500
        );
        return next(error);
      }
      const {location}= req.body;
      console.log(location);
      location_update.location=location;
      try {
        await location_update.save();
       } catch (err) {
         const error = new Erur(
           'Updation up failed, please try again later.',
           500
         );
         return next(error);
       }
       res.status(201).json({message: 'Location Updated'});

};
exports.availability = availability;
exports.update_location = update_location;
