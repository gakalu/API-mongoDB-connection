const mongoose = require('mongoose');
const programSchema = mongoose.Schema({
    "name":{type:String},
    "programs":[{
        "name":{type:String} 
    }],
    "departments":[{
        "name":{type:String},
        "professors":[{
        "name":{type:String}
        }],
    }]
})
const programModel = mongoose.model('unversity', programSchema)
class programCollection {
    static async create(name,programs,departments) {
        const program = new programModel({name,programs,departments});
        await program.save();
        return program;
    }
}
module.exports=programCollection;