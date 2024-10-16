const mongoose = require('mongoose');  

const eventSchema = new mongoose.Schema({
    eventName : {
        type : String,
        required : true
    },
    eventDate : {
        type : Date,
        required : true
    },
    eventTime : {
        type : String,
        required : true
    },
    eventLocation : {
        type : String,
        required : true
    },
    eventDescription : {
        type : String,
        required : true
    },
    eventFee : {
        type : Number,
        required : true
    },
    tickets : {
        type : Number,
        required : true
    },
    eventImage : {
        type : String,
    },
    adminid : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Admin',
        required:true
    },
    payment : {
        type : Array,
    }
})

const EventModel = mongoose.model('Event', eventSchema);
module.exports = EventModel;