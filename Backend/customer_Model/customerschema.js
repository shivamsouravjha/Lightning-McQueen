const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const customer = new schema({
    name: {type :String,required:true},
    
    phone: {type :String,required:true,unique:true,minlength:10,maxLength:10 },
    password: {type :String,required:true,unique:false,minlength:8},
    city: {type :String,unique:false,required:true},
    answer: {type :String,unique:false,required:true},
    email: {type :String,required:true,unique:true}
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Customer',customer);
