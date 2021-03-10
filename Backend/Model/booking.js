const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const schema=  mongoose.Schema;
const bookingscema = new schema({
    rider_id: {type :mongoose.Types.ObjectId,required:true,ref:'Rider_Provider' },
    driver_id: {type :mongoose.Types.ObjectId,required:true,ref:'Driver' },
    initial_rider_location: {lat:{type :Number,required:true },lng:{type :Number,required:true }},
    initial_driver_location: {lat:{type :Number,required:true },lng:{type :Number,required:true }},
    destination: {lat:{type :Number,required:true },lng:{type :Number,required:true }},
    status:{type:Boolean,required:true}  
});

bookingscema.plugin(uniquevalidator);
module.exports =mongoose.model('Booking',bookingscema);