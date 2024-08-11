import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";


// /tasks/{taskid}
export async function GET(request,{params}) {
    const {taskid} = params;
    try {
        const task = await Task.findById(taskid);
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return getResponseMessage("error in getting task !!", 404, false); 
    } 
}


// update the task
export async function PUT(request, {params}) {
    const {taskid} = params;

    const {title, content, status} = await request.json();

    try {
        let task = await Task.findById(taskid);

        task.title = title,
        task.content = content,
        task.status = status

        const updatedTask = await task.save();

        return NextResponse.json(updatedTask);
        
    } catch (error) {
        console.log(error);
        return getResponseMessage("error in updating task !!", 404, false); 
    }


}

// delete task
export async function DELETE(request, {params}) {
    const {taskid} = params;

    try {
        await Task.deleteOne({
            _id:taskid
        });
        return NextResponse.json({
            message:"task deleted !!",
            success:true,
        })
        
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in deleting task !!",500, false);
        
    }
    
}

