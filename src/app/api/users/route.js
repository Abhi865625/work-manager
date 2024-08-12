import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
connectDb();

// get request function
export async function GET(request){
    let users =[];
    try {
        users = await User.find().select("-password");
        
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

     // Check if the email already exists
     const existingUser = await User.findOne({ email });
     if (existingUser) {
         return NextResponse.json({
             message: "Email already in use. Please use a different email.",
             status: false,
         }, {
             status: 400,
         });
     }

    // Generate a salt with a specified number of rounds (e.g., 10)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);


    // create user object with user model
try {
    const user = new User({
        name, 
        email, 
        password: hashedPassword, 
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
    },{
        status:500,
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
// export function PUT(){
    
// }

// delete request function
// uri variable
// export function DELETE(request){
//     console.log("delete api called");
//     return NextResponse.json({
//         message: "deleted !!",
//         status:true,
//     },{status:201, statusText: "hey changed text"})
    
// }