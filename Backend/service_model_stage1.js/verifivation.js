const mongoose = require('mongoose');
const schema=  mongoose.Schema;
const verification_schema = new schema({
    service_id: {type :mongoose.Types.ObjectId,required:true,ref:'Loggin_schema' },
    verification:{type:Boolean,required:true}  
});

module.exports =mongoose.model('Verification',verification_schema);