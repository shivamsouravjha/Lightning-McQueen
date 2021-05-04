const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const customer = new schema({
    name: {type :String,required:true },
    city: {type :String,required:true},
    email: {type :String,required:true,unique:true },
    phone: {type :String,required:true,unique:true,minlength:10,maxLength:10 },
    password: {type :String,required:true,minlength:8 },
    sanswer: {type: String,unique:true},
});

module.exports = mongoose.model('Customer',customer);
