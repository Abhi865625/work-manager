import { NextResponse } from "next/server";

export function DELETE(request,{ params }){
    console.log(params);
    const { userid } = params;
    console.log("User id: ", userid);


    return NextResponse.json({
        "message": "testing delete"
    })
}