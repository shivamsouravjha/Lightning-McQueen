const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const rider_schema = new schema({
    rider_name: {type :String,required:true },
    email: {type :String,required:true,unique:true },
    phone: {type :String,required:true,unique:true,minlength:10 },
    password: {type :String,required:true,minlength:8 },
    account: {type: String,required:true,minlength:12,maxLength:12},
    location: {lat:{type :Number,required:true },lng:{type :Number,required:true }},
   /// profile_Pic: {type :String,required:true },
});

module.exports = mongoose.model('Rider_provider',rider_schema);
