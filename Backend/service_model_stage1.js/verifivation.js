const mongoose = require('mongoose');
const schema=  mongoose.Schema;
const verification_schema = new schema({
    service_id: {type :mongoose.Types.ObjectId,required:true,ref:'Loggin_schema' },
    verification:{type:Boolean,required:true}  
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports =mongoose.model('Verification',verification_schema);