const {Router} = require("express");
const jwt = require('jsonwebtoken');
const userRouter = Router();
const {userModel, purchaseModel, courseModel} = require("../db")

//importing jwt_secret from config file

const {JWT_USER_PASSWORD} = require("../config"); 


userRouter.post("/signup", async function(req,res){              

    const {email, password, firstName, lastName } = req.body;  // TODO: adding zod validation
    //TODO: hash the password so plain-text is not stored in DB

    //TDOO: Put inside try catch block 
    await userModel.create({
        email: email, 
        password: password, 
        firstName: firstName, 
        lastName: lastName

    })
    res.json({
        message: " Signup succeeded"
    })

})

//  signin 


userRouter.post("/signin", async function(req,res){

    const {email, password} = req.body

    // 
   const user =  await userModel.findOne({
        email,
        password
    })

    if(user){
        const token = jwt.sign({
            id: user._id,
        }, JWT_USER_PASSWORD);

        //    WE CAN DO TEH COOKIE LOGIC HERE INSTEAD OF TOKEN 
     res.json({
       token: token
    })

    } else{
        res.status(403).json({
            message: " Incorrect credentials "
        })
    }

    
})

userRouter.get("/purchases", function(req,res){

    const userId = req.userId
    const  purchases = purchaseModel.find({
        userId
    })

    const purchasedCourse = [];

    for(let i = 0; i<purchases.lenght ; i++){
        purchasedCourse.push(purchases[i].courseId  )
    }

    const courseData = courseModel.find({
      _id: {$in: purchasedCourse}
    })
    res.json({
        purchases, 
        courseData
    })
})

module.exports = {
    userRouter: userRouter
}