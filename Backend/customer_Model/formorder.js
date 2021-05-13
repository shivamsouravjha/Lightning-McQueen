const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const order = new schema({
    quantity: {type :String,required:true },
    duration: {type :String,required:true},
    location: {type :String,required:true},
    startDate: {type :String,required:true},
    skill: {type :String,required:true},
});

module.exports = mongoose.model('Order',order);
