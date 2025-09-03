require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { userRouter } = require("./routes/user");
const { courseRoute } = require("./routes/course");
const { adminRoute } = require("./routes/admin");

const app = express();
app.use(express.json());


app.use("/user", userRouter);
app.use("/course", courseRoute);
app.use("/admin", adminRoute);

async function main() {
    // environment file
    await mongoose.connect("process.env.MONGO_URL")
    app.listen(3000);
    console.log("listening to port 3000");

}

main()


