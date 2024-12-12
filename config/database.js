const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://aithaniyogesh:Yogesh009@cluster0.wlzh3ka.mongodb.net/backend", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the process if the database connection fails
    }
}

module.exports = { connectDB };
