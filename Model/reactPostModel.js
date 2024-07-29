const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nativeSchema = new Schema({

    sendId:{
        type:String
    },
    totalPrice:{
        type:Number
    },
    timeChosen:{
        type:String
    },
    img:{
        type:String
    },
    title:{
        type:String
    }
})


module.exports = mongoose.model('postDetails',nativeSchema);