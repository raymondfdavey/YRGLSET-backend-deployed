const apiRouter = require("express").Router();
const tasksRouter = require("./tasks.router.js");


apiRouter.get("/", (req, res) => res.status(200).send({message: "seems to be ok - /api"}));

apiRouter.use("/goals", tasksRouter);

module.exports = apiRouter;
