 
const express = require('express'); 
const jwt = require('jsonwebtoken');  
const mongoose = require('mongoose'); 
const {userRouter} = require("./routes/user");
const {courseRoute} = require("./routes/course");
const {adminRoute} = require("./routes/admin");

const app = express();


app.use("/user", userRouter);
app.use("/course", courseRoute);
app.use("/admin", adminRoute);

app.listen(3000)

