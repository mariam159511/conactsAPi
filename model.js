var mongoose = require ('mongoose');

// Set the db schema
var contactSchema = mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    gender: {
        type: String
    },
    phone:{
        type:String
    },
    create_data:{
        type: Date,
        default: Date.now
    }
});


var contact =module.exports = mongoose.model('Conact', contactSchema );

module.exports.get = function(callback, limit) {
    contact.find(callback).limit(limit);
}