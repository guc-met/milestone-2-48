const express= require('express');
const app= express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose
.connect('mongodb://localhost:27017/guc_portal', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("mongoDB connected"))
.catch((err) => console.log(err));
//const AcademicStaffRouter =
//require("./routes/AcademicStaff");
//app.use("/", AcademicStaffRouter);






app.listen(3000,function()
{
    console.log("Server started at port 3000");
});