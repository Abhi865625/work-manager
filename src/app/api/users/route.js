import { NextRequest, NextResponse } from "next/server"
// get request function
export function GET(request){
const users=[{
    name:'Abhishek',
    phone: '2525',
    course: 'cpp',
},
{
    name:'Raja',
    phone: '2585',
    course: 'c',
},
{
    name:'Durgesh',
    phone: '2529',
    course: 'nextjs',
},
{
    name:'Rahul',
    phone: '3525',
    course: 'react',
},
]

return NextResponse.json(users)
}

// post request function
export function POST(){

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