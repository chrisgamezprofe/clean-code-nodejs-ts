import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: [String],
        required: [true,'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique:true
    },
    nationality: {
        type: [String],
        required: [true, 'Nationality is required'],
    },
    career: {
        type: [String],
        default:['SOFTWARE_DEVELOPMENT'],
        enum:['SOFTWARE_DEVELOPMENT','MOBILE_APPLICATION_DEVELOPMENT']
    },
    phone: String,
    image: String,
    age: Number
});


export const StudentModel = mongoose.model('Student', studentSchema);