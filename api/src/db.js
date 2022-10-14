"use strict";
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost/rick-and-morty";
mongoose.connect(MONGODB_URI, {});
