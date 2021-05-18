const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const service = new schema({
    service_id: {type :mongoose.Types.ObjectId,required:true,ref:'Loggin_schema' },
    name: {type :String,required:true },
    location: {type :String,required:true},
    dob: {type :String,required:true },
    phone: {type :String,required:true,unique:true,minlength:10,maxLength:10 },
    sex: {type :String,required:true},
    password: {type :String,required:true,minlength:8 },
    aadhar: {type: String,unique:true},
    zipcode: {type :String,required:true ,minlength:6,maxLength:6},
    email: {type :String,required:true,unique:true }

},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Service',service);
