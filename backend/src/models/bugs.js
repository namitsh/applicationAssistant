const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bugSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true 
    },
    assigned: {
        type: String,
        required: true,
        default: 'Unassigned'
    },
    status: {
        type: String,
        required: true,
        enum : ['New-Issue', 'Triage', 'Progress', 'Closed'],
        default: 'New-Issue',
        required: true
    }
},{
    timestamps: true
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug