"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = __importDefault(require("./home"));
/* Importo todas las rutas abajo */
const home_2 = __importDefault(require("./home"));
/* Abajo declaramos las rutas */
home_1.default.use("/home", home_2.default);
exports.default = home_1.default;
