const mongoose = require("mongoose")

const connectString = "mongodb+srv://aithaniyogesh:Yogesh009@cluster0.wlzh3ka.mongodb.net/loveee"
const connectDB = async () => {
    await mongoose.connect(connectString)
}

module.exports = { connectDB } 