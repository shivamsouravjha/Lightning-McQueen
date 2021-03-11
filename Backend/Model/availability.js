const mongoose = require('mongoose');
const schema=  mongoose.Schema;
const availability_schema = new schema({
    driver_id: {type :mongoose.Types.ObjectId,required:true,ref:'Driver' },
    availability:{type:Boolean,required:true}  
});

module.exports =mongoose.model('Availability',availability_schema);