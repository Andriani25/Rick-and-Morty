import {Schema, model} from "mongoose"

export interface Character {
Name: string
image: string
race?: string
first_seen?: string
last_seen?: string
status: string
}


const Character = new Schema<Character>({
Name: { String, required: true },
image: { String, required: true },
race: { String },
first_seen: { String },
last_seen: { String },
status: { String }
})