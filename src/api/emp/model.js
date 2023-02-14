const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empid: {type: String, maxlength: 3, unique: true, required: true},
    name: { type:String, maxlength: 128, required: true },
    gender: { type: String, maxlength:1, required: true },
    mobile: { type: String, maxlength: 11, required: true },
    email: { type: String, maxlength: 128, match:/^\S+@\S+\.\S+$/, unique: true },
    doj: { type:String, maxlength:10, match: /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/, required: true }
})

const employee = new mongoose.model("EmpCollection", empSchema)
module.exports = employee;