import { NextResponse } from "next/server";
import { Task } from "@/models/task";

// /tasks
export async function GET(request){
    return NextResponse.json({
        "message":"task's api getting data"
    })
}

// create all the tasks

export async function POST(request) {

    const {title, content, userid} = await request.json();

    try {
        const task = new Task({
            title,
            content,
            userid,
        });

        const createdTask = await task.save();

        return NextResponse.json({
            message:"task created !!",
            status:201,
            data:createdTask,
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "falid to create task !!",
            status:false,
        })
        
    }
    
}
