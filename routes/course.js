const {Router} = require("express");

const courseRoute = Router();

courseRoute.post("/purchase", function(req,res){
    res.json({
        message: "Different courses "
    })

})
courseRoute.get("/courses", function(req,res){
    res.json({
        message: "YOu have access to these courses "
    })

})  

module.exports = {
    courseRoute: courseRoute
}