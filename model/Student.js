import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
})

export const userModel = mongoose.models?.schoolStudents || mongoose.model('schoolStudents',userSchema)






