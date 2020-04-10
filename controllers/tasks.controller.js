const {
  fetchTasks,
  createTask,
  makeTaskComplete,
  deleteTask,
} = require("../models/tasks.model.js");

exports.getTasks = (req, res, next) => {
  console.log("IN SONTROLLED");

  const { year } = req.params;
  console.log(year);

  fetchTasks(year).then((tasks) => res.status(200).send({ goals: tasks }));
};
exports.postTask = (req, res, next) => {
  const newTask = req.body;
  createTask(newTask).then((newTask) => {
    console.log(newTask);
    res.status(201).send({ newGoal: newTask });
  });
};
exports.completeTask = (req, res, next) => {
  const { goal_id, thoughts } = req.body;
  makeTaskComplete(goal_id, thoughts).then((completedTasks) =>
    res.status(200).send({ completedGoals: completedTasks })
  );
};
exports.removeTask = (req, res, next) => {
  console.log("in controller");
  const { goal_id } = req.body;
  deleteTask(goal_id).then((result) => {
    res.status(200).send({ deletedGoals: result });
  });
};
