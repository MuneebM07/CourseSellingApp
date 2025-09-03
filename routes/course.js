const {Router} = require("express");
const { courseModel } = require("../db");
const courseRoute = Router();

/*title: String , 
    description: String, 
    price: Number, 
    imageUrl: String, 
    creatorId: ObjectId */

courseRoute.post("/purchase", function(req,res){
    const userId = req.body;
    const courseId = req.body.course;

    purchaseModel.create({
        userId, 
        courseId
    })

    res.json({
        message: "You have successfully purchsed course "
    })

})
courseRoute.get("/preview", function(req,res){

    const course = courseModel.find({})  // user should be able to see all the courses 
    res.json({
    course

})
})

module.exports = {
    courseRoute: courseRoute
}