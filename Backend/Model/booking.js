const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const schema=  mongoose.Schema;
const bookingscema = new schema({
    rider_id: {type :mongoose.Types.ObjectId,required:true,ref:'User' },
    driver_id: {type :mongoose.Types.ObjectId,required:true,ref:'User' },
    initial_rider_location: {type :mongoose.Types.ObjectId,required:true,ref:'User' },
    initial_driver_location: {type :mongoose.Types.ObjectId,required:true,ref:'User' },
    destination: {type :mongoose.Types.ObjectId,required:true,ref:'User' },
    status:{type:Boolean,require:true}  
});

bookingscema.plugin(uniquevalidator);
module.exports =mongoose.model('Booking',bookingscema);