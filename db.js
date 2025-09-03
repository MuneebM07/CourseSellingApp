const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const ObjectId = mongoose.Types.ObjectId;
console.log("connect to db");

// mongoose.connect("mongodb+srv://muneeb07:Kurulusosman@cluster0.sayvb3v.mongodb.net/courseSelling-app") ==> 

const userSchema = new Schema({
    email: {type: String, unique: true },
    password: String, 
    firstName: String, 
    lastName: String 
});

const adminSchema = new Schema({
    
    email: {type: String, unique: true },
    password: String, 
    firstName: String, 
    lastName: String 
});
const courseSchema = new Schema({
    title: String , 
    description: String, 
    price: Number, 
    imageUrl: String, 
    creatorId: ObjectId
});
const purchaseSchema = new Schema({
    userId: ObjectId, 
    courseId: ObjectId
    
});

// const userSchema = mongoose.Model("user", userSchema);
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = {
    userModel,
    adminModel, 
    courseModel, 
    purchaseModel
}