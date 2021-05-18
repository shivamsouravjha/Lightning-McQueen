const mongoose = require('mongoose');
const schema=  mongoose.Schema;
const loggin_schema = new schema({
    email: {type :String,unique:true },
    phone: {type :String,unique:true,minlength:10,maxLength:10 },
    password: {type :String,required:true,minlength:8 }

},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports =mongoose.model('Loggin_schema',loggin_schema);