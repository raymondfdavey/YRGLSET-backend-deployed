const tasksRouter = require("express").Router();
const {
  getTasks,
  postTask,
  completeTask,
  removeTask
} = require("../controllers/tasks.controller");

tasksRouter.get("/", (req, res) => res.status(200).send({message: "seems to be ok - /goals"}));

tasksRouter
  .route("/:year")
  .get(getTasks)
  .post(postTask)
  .patch(completeTask)
  .delete(removeTask);

module.exports = tasksRouter;
