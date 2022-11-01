"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Character = new mongoose_1.Schema({
    Name: { String, required: true },
    image: { String, required: true },
    race: { String },
    first_seen: { String },
    last_seen: { String },
    status: { String }
});
