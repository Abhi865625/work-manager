import mongoose from "mongoose";

// Define status enum
const TaskStatus = {
    PENDING: 'pending',
    COMPLETED: 'completed'
};

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    status:{
        type:String,
        enum: Object.values(TaskStatus),  // Uses enum values
        default: TaskStatus.PENDING,    // Default to 'pending'
    },
    userid:{
        type:mongoose.ObjectId,
        required:true,
    }
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", taskSchema )
