import { Router, Response, Request } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Hola carechimba 😎")
} )

export default router