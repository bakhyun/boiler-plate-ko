const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {    //유효성 검사
        type: String
    },
    tokenExp: { //유효 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // (모델명, 스키마)

module.exports = { User }  // 다른 곳에서 사용하기 위한 exports
