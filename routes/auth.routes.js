// packages
let express = require("express");
let bcrypt = require("bcrypt");

// local imports
let RegisterModel = require("../models/register.model.js")

// parent router for registration and login
let authRouter = express.Router();

//Route for registering the user
authRouter.post("/register", async (req,res)=>{
    try {
        //destructuring the data from req.body
        let {userName,age,password,email,role} = req.body;

        //hashing the password and storing the user in the database
        bcrypt.hash(password, 5, async function(err, hash) {
            try {
                if(err) {
                    res.status(500).send("Something was while hashing the password")
                }
                //adding user to DB with hashed password
                let newUser = new RegisterModel({
                    userName,
                    password:hash,
                    email,
                    age,
                    role
                })
                // saving the data to DB
                await newUser.save();
                //Sending the response
                res.status(201).send("User registered successfully")
            } catch (error) {
                res.status(500).send(error)
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

// exports
module.exports = authRouter;