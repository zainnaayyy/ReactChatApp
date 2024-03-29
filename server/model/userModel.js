const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    // phoneNumber: {
    //     type: Number,
    //     required: false,
    //     unique: true
    // },
    pass: {
        type: String,
        required: true,
        min: 8
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false
    },
    avatarImage: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("Users", userSchema)