import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
connectDb();

// get request function
export async function GET(request){
    let users =[];
    try {
        users = await User.find();
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"failed to get users",
            success: false,
        })
    }

return NextResponse.json(users)
}

// post request function
// data post
// create user
export async function POST(request){

    // featch user details from request

    const {name, email, password, about, profileURL} = await request.json();


    // create user object with user model
try {
    const user = new User({
        name, 
        email, 
        password, 
        about, 
        profileURL,
    });
    
    // save the object to database
    const createdUser = await user.save();
    console.log("User created with address:", createdUser);
    const response = NextResponse.json(user,{
        status: 201,
    });

    return response;
    
} catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"failed to create user !!",
        status:false,
    });
    
}

    // const body = request.body;
    // console.log(body);
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextUrl.searchParams);
    // const jsonData = await request.json();
    // console.log(jsonData);

    // return NextResponse.json({
    //     "message":"Posting user data",
    // });
}

// update request function
export function PUT(){
    
}

// delete request function
// uri variable
export function DELETE(request){
    console.log("delete api called");
    return NextResponse.json({
        message: "deleted !!",
        status:true,
    },{status:201, statusText: "hey changed text"})
    
}