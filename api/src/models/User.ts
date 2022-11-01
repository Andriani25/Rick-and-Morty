import { Schema, model } from "mongoose"


export interface User {
    firstName: string
    lastName: string
    email: string
    password: string
    avatar: string
}

const User = new Schema<User>({
firstName: { String, required: true },
lastName: { String, required: true },
email: { String, required: true },
password: { String, required: true },
avatar: { String, required: true, default: "jaja"}
})