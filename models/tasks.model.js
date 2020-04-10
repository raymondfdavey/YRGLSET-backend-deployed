const connection = require("../db/connection");

exports.fetchTasks = (year) => {
  return connection
    .select("*")
    .from("goals")
    .where("year", "=", year)
    .then((result) => result);
  // console.log("in model");
  // return db.query("SELECT * FROM goals;").then(result => result.rows);
};
exports.createTask = (newTask) => {
  console.log("in new task model");
  const { year, goal, reason } = newTask;
  return connection("goals")
    .insert({ year, goal, reason }, "*")
    .then((result) => result)
    .catch((err) => console.log(err));

  // return db
  //   .query(
  //     "INSERT INTO goals (year, task, reason) VALUES ($1, $2, $3) RETURNING *;",
  //     [year, task, reason]
  //   )
  //   .then(result => result.rows);
};
exports.makeTaskComplete = (goal, thoughts) => {
  return connection("goals")
    .where("goal", "=", goal)
    .update({ completed: 1, thoughts }, "*")
    .then((result) => result)
    .catch((err) => console.log(err));
  // return db
  //   .query(
  //     "UPDATE goals SET completed = '1', notes = 'it was suprisingly tricky' WHERE task = $1 RETURNING *;",
  //     [task]
  //   )
  //   .then(result => result.rows);
};
exports.deleteTask = (goal) => {
  console.log("in delete model", goal);
  return connection("goals")
    .where("goal", "=", goal)
    .update({ deleted: 1 }, "*")
    .then((result) => result)
    .catch((err) => console.log(err));
  // return db
  //   .query("UPDATE goals SET deleted = '1' WHERE goal = $1 RETURNING *;", [
  //     task
  //   ])
  //   .then(result => result.rows);
};
