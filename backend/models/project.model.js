//project title
//project short description
//project long description
//languages
//gitlink
//project status
//date

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectTitle:{type:String, require:true},
    shortDescription:{type:String, require:true},
    description:{type:String, require:true},
    languages:{type:String, requrie:true},
    gitlink:{type:String, require:true},
    popularProject:{type:Boolean},
    date:{type:String, requrie:true},
},{
    timestamps:true,
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;