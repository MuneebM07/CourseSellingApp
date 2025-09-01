// Initialize a new Node.js project
// Add Express, jsonwebtoken, mongoose to it as a dependency
// Create index.js
// Add route skeleton for user login, signup, purchase a course, sees all courses, sees the purchased courses course
// Add routes for admin login, admin signup, create a course, delete a course, add course content.
// Define the schema for User, Admin, Course, Purchase
// Add a database (mongodb), use dotenv to store the database connection string
// Add middlewares for user and admin auth
// Complete the routes for user login, signup, purchase a course, see course (Extra points - Use express routing to better structure your routes)
// Create the frontend

const express = require('express'); 
const jwt = require('jsonwebtoken');  
const mongoose = require('mongoose'); 
const app = express();

app.post("/signup", function(req,res){

    res.json({
        message: " signup endpoint"
    })

})
app.post("/signin", function(req,res){
     res.json({
        message: " signin endpoint"
    })

})

app.get("/user/purchases", function(req,res){
    res.json({
        message: " purchases"
    })
})
app.post("/course/purchase", function(req,res){
    res.json({
        message: "Different courses "
    })

})
app.get("/courses", function(req,res){
    res.json({
        message: "YOu have access to these courses "
    })

})