const express = require('express');
const app = express();
const { connectDB } = require("./config/database");
const User = require('./models/UserModel'); // Fix: Capitalize User as it's a model

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

app.post("/signup", async (req, res) => {

    const data = new User({
        firstName: "Yogesh",
        lastName: "Aithani",
        emailId: "yogeshaithani@gmail.com",
        password: "Yogesh@321"
    })

    try {
        await data.save();
        res.send("Data saved successfully")
    } catch (err) {
        console.log("Something went wrong");
        res.send(err.message)
    }
})

app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId; // Ensure this is sent in the request body
    try {
        const user = await User.findOne({ emailId: userEmail }); // Find one user with the given emailId

        if (!user) { // If user is null, no match was found
            res.status(404).send("User not found");
        } else {
            res.status(200).send(user); // Return the found user
        }

    } catch (err) {
        console.error("Error occurred:", err.message); // Log the error for debugging
        res.status(500).send("Something went wrong");
    }
});


