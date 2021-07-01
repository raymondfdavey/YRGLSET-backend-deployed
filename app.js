const express = require("express");
const apiRouter = require("./routes/api.router");
var cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);
app.get("/", (req, res, next)=>{res.status(200).send({message: "seems to be ok - /"})})
app.get("/api", (req, res, next)=>{res.status(200).send({message: "seems to be ok"})})
module.exports = app;
