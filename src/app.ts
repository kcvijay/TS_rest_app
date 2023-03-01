// const express = require("express"); ** Because TS does not have type support for app variable.
import express from "express";

const app = express();

app.listen(3005);
