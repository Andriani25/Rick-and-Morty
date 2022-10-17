import { Router, Request, Response } from "express"
import router from "./home"

/* Importo todas las rutas abajo */

import Home from "./home"

/* Abajo declaramos las rutas */

router.use("/home", Home)

export default router