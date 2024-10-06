import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo db connected successfully : ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to database ..", error.message);
        process.exit(1); // if return 1 its a failure, if 0 status code is success
        
    }

}