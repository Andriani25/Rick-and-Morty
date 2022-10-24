import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const { MONGODB_STRING_CONNECTION } = process.env;

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(MONGODB_STRING_CONNECTION as string);
        console.log("Mongodb is connectet to", db.connection.host)

    }catch(error) {
      console.log(error)
    }
}
