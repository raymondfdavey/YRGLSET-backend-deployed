const express = require("express");
const apiRouter = require("./routes/api.router");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

// app.use((err, req, res, next) => {
//   if (err.code === "22P02") {
//     res.status(400).send({ msg: "bad request" });
//   } else {
//     res.status(err.status || 500).send({ msg: err.msg || "sever fail" });
//   }
// });

module.exports = app;
