const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const order = new schema({
    resources: {type :String,required:true },
    duration: {type :String,required:true},
    location: {type :String,required:true},
    startDate: {type :String,required:true},
    name: {type :String,required:true},
    phone: {type :String,required:true},
    skill: {type :String,required:true}
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Order',order);
