const apiRouter = require("express").Router();
const tasksRouter = require("./tasks.router.js");

apiRouter.get("/", (req, res) => console.log("getting to apiRouter"));

apiRouter.use("/goals", tasksRouter);

module.exports = apiRouter;
