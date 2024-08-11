import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// api/users/[userid]/tasks
export async function GET(request, {params}){
    const {userid} = params;

    try {
        const tasks = await Task.find({
            userid:userid
        });

        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("error in getting data !!, 404, false");
    }
}