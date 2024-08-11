import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { getResponseMessage } from "@/helper/responseMessage";


// create task

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
        return getResponseMessage("falid to create task !!", 500, false);
    }
    
}

// /tasks
export async function GET(request){
    try {
        const tasks = await Task.find();

        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("error in getting data !!, 404, false");
    }
}
