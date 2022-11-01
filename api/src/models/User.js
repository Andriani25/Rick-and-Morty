"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    firstName: { String, required: true },
    lastName: { String, required: true },
    email: { String, required: true },
    password: { String, required: true },
    avatar: { String, required: true, default: "jaja" }
});
