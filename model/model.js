const express = require("express")
const mongoose = require("mongoose")


const employeeSchema = new mongoose.Schema({
    emp_id : {
        type : Number,
        required : true
    },

    emp_name : {
        type : String,
        required : true
    },

    department : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('employee',employeeSchema)