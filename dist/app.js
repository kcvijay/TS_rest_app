"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express"); ** Because TS does not have type support for app variable.
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(3005);