const tasksRouter = require("express").Router();
const {
  getTasks,
  postTask,
  completeTask,
  removeTask
} = require("../controllers/tasks.controller");

tasksRouter
  .route("/:year")
  .get(getTasks)
  .post(postTask)
  .patch(completeTask)
  .delete(removeTask);

module.exports = tasksRouter;
