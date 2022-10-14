import express, {Application, Request, Response} from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
/*import router from "routes"*/

dotenv.config()
const { PORT } = process.env;

const server: Application = express()

server.set("port", PORT || 4000)

server.use(morgan("dev"));
server.use(cors())

export default server