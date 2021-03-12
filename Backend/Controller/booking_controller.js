const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Erur = require('../Model/Error');
const Availability_Schema = require('../Model/availability');
const Driver_Schema = require('../model/driver_schema');
const Rider_Schema = require('../model/rider_schema');
const Booking_Schema = require('../model/booking');


const availability  = async (req,res,next)=>{
    const driver_id = req.params.did;
    console.log(driver_id);

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
      location_update.location=location;
      try {
        await location_update.save();
       } catch (err) {
         const error = new Erur(
           'Updation up failed, please try again later.',
           500
         );
         console.log(error);

         return next(error);
       }
       res.status(201).json({message: 'Location Updated'});

};
const booking = async(req,res,next) =>{
    const rider_id = req.params.uid;
    let rider_data;
    let driver_data;
    const { driver_id,destination}=req.body;

    try{
        driver_data = await Driver_Schema.findOne({_id:driver_id});
        rider_data = await Rider_Schema.findOne({_id:rider_id});
    }catch(err){
        const error = new Erur(
            'Loggin in failed, please try again later.',
            500
          );
          return next(error);
    } 
    const initial_rider_location = rider_data.location;
    const initial_driver_location = driver_data.location;
    const status = true;
    const new_booking = new Booking_Schema({rider_id,driver_id,initial_rider_location,initial_driver_location,
                            destination, status          
    
    });
    try {
        await new_booking.save();
       } catch (err) {
         const error = new Erur(
           'Updation up failed, please try again later.',
           500
         );
         return next(error);
       }
       res.status(201).json({message: 'Trip Started!'});
};
const history_uid = async(req,res,next) =>{
    const rider_id = req.params.uid;
    let history;
  try {
    history = await Rider_Schema.findById(rider_id);///////////////removed populate
  } catch (err) {
    const error = new Erur(
      'Fetching places failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!history ) {
    return next(
      new Erur('User is introvert', 404)
    );
  }

  res.json({ History: history.toObject({ getters: true }) });
};


const history_did = async(req,res,next) =>{
    const driver_id = req.params.did;
    let history;
  try {
    history = await Driver_Schema.findById(driver_id);///////////////removed populate
  } catch (err) {
    const error = new Erur(
      'Fetching places failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!history ) {
    return next(
      new Erur('Driver is introvert', 404)
    );
  }

  res.json({ History: history.toObject({ getters: true }) });
};
const end =  async(req,res,next) =>{
    const rider_id = req.params.uid;
    let end_ride;
    try {
        end_ride = await Booking_Schema.findOne({rider_id:rider_id});///////////////removed populate
      } catch (err) {
        const error = new Erur(
          'Fetching places failed, please try again later.',
          500
        );
        return next(error);
      }
   ///   console.log(end_ride);
     end_ride.status =false;
      try {
        await end_ride.save();
       } catch (err) {
         const error = new Erur(
           'Updation up failed, please try again later.',
           500
         );
         return next(error);
       }
       res.status(201).json({message: 'Ride Ended'});


};
exports.booking = booking;
exports.availability = availability;
exports.update_location = update_location;
exports.history_uid = history_uid;
exports.history_did = history_did;
exports.end = end;