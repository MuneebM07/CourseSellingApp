const { Router} = require('express');
const adminRoute = Router();
const { adminModel } = require("../db");

adminRoute.post("/signup", function(req,res){

    res.json({
        message: " signup endpoint"
    })

})
adminRoute.post("/signin", function(req,res){
     res.json({
        message: " signin endpoint"
    })

})
adminRoute.post("/course", function(req,res){
     res.json({
        message: " signin endpoint"
    })

})

adminRoute.put("/courses/bulk", function(req,res){
    res.json({
        message: " You have added the courses"
    })
})
adminRoute.get("/courses", function(req,res){
     res.json({
        message: " Final courses"
    })

})

module.exports = {
    adminRoute: adminRoute
}