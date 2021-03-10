const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schema=  mongoose.Schema;
const driver_schema = new schema({
    driver_name: {type :String,required:true },
    email: {type :String,required:true,unique:true },
    phone: {type :String,required:true,unique:true,minlength:10 },
    password: {type :String,required:true,minlength:8 },
    car_number:{type: String,required:true,unique:true,minlength:10,maxLength:10},
    account: {type: String,required:true,minlength:12,maxLength:12},
    location: {lat:{type :Number,required:true },lng:{type :Number,required:true }},

   /// profile_Pic: {type :String,required:true },
});

driver_schema.plugin(uniqueValidator);
module.exports = mongoose.model('Driver',driver_schema);