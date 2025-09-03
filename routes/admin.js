const { Router} = require('express');
const adminRoute = Router();
const { adminModel, courseModel} = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');

// adding an middleware 
adminRoute.post("/signup", async function(req,res){

    const {email, password, firstName, lastName}  = req.body

    await adminModel.create({
        email, 
        password, 
        firstName, 
        lastName
    })

    res.json({
        message: " Admin Signup done!"
    })

})
adminRoute.post("/signin", async function(req,res){

    const {email, password } = req.body

     const admin = await adminModel.findOne({
        email, 
        password

     });
     if(admin){
        const token = jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD)

          res.json({
       token
    })
     } else {
        res.status(403).json({
            message: " incorrect credentials"
        })
     }
   
})
adminRoute.post("/course", async function(req,res){

    const adminId = req.userId;

    const {title, description, imageUrl, price } = req.body;


    const course = await courseModel.create({
        title, description, imageUrl, price, creatorId: adminId
    })
    
     res.json({
        message: " signin endpoint",
        course: course._id
    })

})

adminRoute.put("/courses", async function(req,res){

    const adminId = req.userId;

    const  {title, description, price, imageUrl, courseId} = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId 
    },{
        title: title, 
        description: description, 
        price: price, 
        imageUrl: imageUrl 
    })

    res.json({
        message: " Course updated ",
        courseId: course._id
    })
})
adminRoute.get("/courses/bulk", async function(req,res){
     const adminId = req.userId
     const courses = await courseModel.find({
        creatorId: adminId        
     })
     res.json({
        message: " courses updated",
        courses
    })

})

module.exports = {
    adminRoute: adminRoute
}