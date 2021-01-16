const express= require('express');
const app= express();
const SignModel=require('./models/SignIn')
const StaffModel = require("./models/AcademicStaff");
const req=require("./models/Request");
const CoursesModel=require("./models/Courses")
const HRstaff=require("./models/HRStaff")
const Attendance=require("./models/AttendanceRecords")
const jwt =require('jsonwebtoken');
app.use(express.json());

const mongoose = require("mongoose");
mongoose
.connect('mongodb+srv://samarfathallah:10061999@cluster0.xetwj.mongodb.net/guc_portal?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndexes:true })
.then(() => console.log("mongoDB connected"))
.catch((err) => console.log(err));
 const JWT_Password="password";
app.use('/login',require('./Routes/login'));
const auth = (req, res, next) => {
    try {
       const token = req.header("auth-token");
        if (!token) {
            return res.status(401).json({ msg: "unauthorized etla3 bara" })
        }
        const verified = jwt.verify(token,JWT_Password);
        if (!verified) {
            return res.status(401).json({ msg: "unauthorized ya hacker" })
        }
        req.id = verified.id;
        next();
    }
    catch (err) {
        return res.status(500).json({ error: err.message })
    }

}
app.use(auth);
app.use('/ViewMissingDays',require('./Routes/ViewMissingDays'))
app.use('/missingHours',require('./Routes/missingHours'))
app.use('/ViewAttendance',require('./Routes/ViewAttendance'))
app.use('/ViewProfile',require('./Routes/ViewProfile'));
app.use('/ResetPassword',require('./Routes/ResetPassword'));
app.use('/SignIn',require('./Routes/SignIn'))
app.use('/SignOut',require('./Routes/Signout'))
app.use('/logout',require('./Routes/logout'))
app.use('/AnnualLeaveRequest',require('./Routes/AnnualLeaveRequest'))
app.use('/AccidentalLeaveRequest',require('./Routes/AccidentalLeaveRequest'))
app.use('/ChangeDayOff',require('./Routes/ChangeDayOff'))
app.use('/SlotLinkingRequest',require('./Routes/SlotLinkingRequest'))
app.use('/SickLeaveRequest',require('./Routes/SickLeave'))
app.use('/Compensation',require('./Routes/Compensation'))
app.use('/MaternityLeaveRequest',require('./Routes/MaternityLeave'))
app.use('/ReplacementRequest',require('./Routes/Replacement'))
app.use('/ViewSchedule',require('./Routes/ViewSchedule'))
app.use('/AllRequestStatus',require('./Routes/AllRequestStatus'))
app.use('/AcceptedRequestStatus',require('./Routes/AcceptedRequestStatus'))
app.use('/PendingRequestStatus',require('./Routes/PendingRequestStatus'))
app.use('/RejectedRequestsStatus',require('./Routes/RejectedRequestsStatus'))
app.use('/CancelRequest',require('./Routes/CancelRequest'))
app.use('/UpdateProfile',require('./Routes/UpdateProfile'))

app.use('/HR',require('./Routes/HR'))
app.use('/CC',require('./Routes/CC'));
app.use('/CI',require('./Routes/CI'));
app.use('/HOD',require('./Routes/HOD'));


// let Courses1 = new CoursesModel({
//     name: "math203",
//     department: "iet",
//     coverage: 5,
//     CCid:123,
//     CIid:8,
//     slot: [{day_slot: "monday2nd", assigned: true},{day_slot: "sunday5th", assigned: false}],
//     TAs:[1234,1746],

// });
// Courses1.save()
// .then((doc) => {
// console.log(doc);
// })
// .catch((err) => {
// console.error(err);
// });

// let requests1= new req ({
//     member_id: 222,
//     reciever_id:123,
//     type: "slotLinking",
//     state: "pending",
//     request_day:"2020-12-3",
//     department:"iet",
//     course_name:"math206",
//     slot:"sunday4th"
// });
// requests1.save()
// .then((doc) => {
// console.log(doc);
// })
// .catch((err) => {
// console.error(err);
// });
// let staff = new StaffModel({
//     Name: "Samar",
//     email: "zzz",
//     salary: 1234,
//     OfficeLocation:"C7.203",
//     CI:"true",
//     HOD:"true"

//     });
//     staff
//     .save()
//     .then((doc) => {
//     console.log(doc);
//     })
//     .catch((err) => {
//     console.error(err);
//     });
// var today= new(Date)
// var theday=new Date(today.getFullYear(),4,today.getDay());
// console.log(theday.getMonth());
// let signin=new SignModel({
//     member_id:"ac-25",
//     Day:today.getDay(),
// Month:today.getMonth(),
// Year: today.getFullYear(),
// Hour:7
// })
// signin.save()
//     .then((doc) => {
//         console.log("ok")
//     })
//     .catch((err) => {
//     console.error(err);
//     }); 
//     let attended=new Attendance({
//         member_id:"ac-18",
//         Days:[{Signin:"Signed in",day:today.getDate(),dayname:today.getDay(),
//         month:today.getMonth(),
//         year: today.getFullYear()}]
//     })
// attended.save()
//             .then((doc) => {
//                 console.log("added");
//             })
//             .catch((err) => {
//             console.error(err);
//             });    


app.listen(5000,function()
{
    console.log("Server started at port 5000");
});