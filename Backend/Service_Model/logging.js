const mongoose = require('mongoose');
const schema=  mongoose.Schema;
const loggin_schema = new schema({
    email: {type :String,required:true,unique:true },
    phone: {type :String,required:true,unique:true,minlength:10,maxLength:10 },
    password: {type :String,required:true,minlength:8 }

});

module.exports =mongoose.model('Loggin_schema',loggin_schema);