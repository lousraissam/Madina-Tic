const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    Titre: {
        type: String,
        
    }, 
    message: {
        type: String,
        
    },
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
});
const message = mongoose.model('message', messageSchema);
module.exports = message;