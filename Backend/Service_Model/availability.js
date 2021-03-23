const mongoose = require('mongoose');
const schema=  mongoose.Schema;
const availability_schema = new schema({
    service_id: {type :mongoose.Types.ObjectId,required:true,ref:'Loggin_schema' },
    availability:{type:Boolean,required:true}  
});

module.exports =mongoose.model('Availability',availability_schema);