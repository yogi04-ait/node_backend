const express = require('express');
const app = express();
const { connectDB } = require("./database");
const User = require('./models/UserModel'); // Fix: Capitalize User as it's a model
import validator from 'validator';

// Middleware to parse JSON
app.use(express.json());

connectDB().then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
        console.log("Hello everyone, I am the server");
    });
}).catch(err => {
    console.error("Database cannot be connected", err); // Fix: Add error logging
});

app.get("/signup", async (req, res) => {
            
    const {name , email, password} = req.body;

    try {
        if(!name || !email || !password){
            res.send("All fields are required");
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.send("User already registered")
        }
    } catch (error) {
        
    }
})

