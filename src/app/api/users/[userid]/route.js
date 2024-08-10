import { NextResponse } from "next/server";
import { User } from "@/models/user";


// deleate user
export async function DELETE(request,{ params }){
    console.log(params);
    const { userid } = params;
    console.log("User id: ", userid);
    try {
        await  User.deleteOne({
            _id:userid
        });

        return NextResponse.json({
            message: "user deleted !!",
            success:true,
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error in deleating user !!",
            success:false,
        });
    }
}