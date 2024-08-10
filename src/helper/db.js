import mongoose from "mongoose";
// import { User } from "@/models/user";

export const connectDb = async()=>{

    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_manager",

        });
        console.log("DB connected...");

        // testing and creating new user

        // const user = new User({
        //     name:"test name",
        //     email:"test@gmail.com",
        //     password:"testpassword",
        //     about:"this is testing"
        // }); 

        // await user.save();

        // console.log("user is created");

        console.log("connected with host: ",connection.host);
        
    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
}