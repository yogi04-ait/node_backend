const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }

})

const User = mongoose.model("User", userSchema);

module.exports = User