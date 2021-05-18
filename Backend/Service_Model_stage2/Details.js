const mongoose = require('mongoose');
const schema =  mongoose.Schema;
const Details_schema = new schema({
        service_id: {type :mongoose.Types.ObjectId,required:true,ref:'Loggin_schema',unique:true },
        location_of_work: {type: String,required:true}, ///3 fields->All_India , Across_State, Local_Guy
        education:{type:String,required:true}, ///option-a,b,c,d,e,f
        emergency_name:{ type: String, required: true},
        phone: {type :String,minlength:10,maxLength:10 },
        emergency_relation:{ type: String, required: true},
        emergency_email:{ type: String, required: true},
        experience:{ type: String},
        rate:{ type: String, required: true},
        aadhar_number: { type: String, required: true,unique:true,minlength:12,maxLength:12 },
        skill:{ type: String, required: true}
},{
        versionKey: false // You should be aware of the outcome after set to false
    });

module.exports = mongoose.model('Details',Details_schema);
