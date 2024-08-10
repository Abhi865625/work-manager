import { NextResponse } from "next/server";
import { User } from "@/models/user";

// get single user
// export const GET =()=>{}
export async function GET(request, {params}){
    const {userid} = params

    try {
        const user = await User.findById(userid);
        if(!user){
            return NextResponse.json({
                message: "user not found !!",
                success:false,
            });
        }
        return NextResponse.json(user)
        
    } catch (error) {
        return NextResponse.json({
            message: "An error occurred while fetching the user !!",
            success:false,
        });        
    }   
}

// update user
export async function PUT(request,{ params }){
    // console.log(params);
    const { userid } = params;
    console.log("User id: ", userid);
    const {name, password, about, profileURL} = await request.json();


    try {
        const user = await User.findById(userid);
        if(!user){
            return NextResponse.json({
                message: "user not found !!",
                success:false,
            }); 
        }

        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;
        // add more information if needed

        const updatedUser = await user.save();

        return NextResponse.json({
            message: "user updated !!",
            success:true,
            data: updatedUser
        });

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error in updating user !!",
            success:false,
        });
    }
}

// delete user
export async function DELETE(request,{ params }){
    // console.log(params);
    const { userid } = params;
    // console.log("User id: ", userid);
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
            message: "Error in deleting user !!",
            success:false,
        });
    }
}