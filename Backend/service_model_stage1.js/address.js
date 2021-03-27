const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const address_schema = new schema({
    service_id: {type :mongoose.Types.ObjectId,required:true,ref:'Loggin_schema' },
    village: {type :String,required:true },
    post: {type :String,required:true},
    ps: {type :String,required:true },
    block: {type :String,required:true},
    pnumber: {type :String,required:true},
});

module.exports = mongoose.model('Address',address_schema);
