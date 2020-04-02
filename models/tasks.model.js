const connection = require("../db/connection");

exports.fetchTasks = year => {
  return connection
    .select("*")
    .from("goals")
    .where("year", "=", year)
    .then(result => result);
  // console.log("in model");
  // return db.query("SELECT * FROM goals;").then(result => result.rows);
};
exports.createTask = newTask => {
  console.log("in new task model");
  const { year, task, reason } = newTask;
  return connection("goals")
    .insert({ year, task, reason }, "*")
    .then(result => result)
    .catch(err => console.log(err));

  // return db
  //   .query(
  //     "INSERT INTO goals (year, task, reason) VALUES ($1, $2, $3) RETURNING *;",
  //     [year, task, reason]
  //   )
  //   .then(result => result.rows);
};
exports.makeTaskComplete = (task, notes) => {
  return connection("goals")
    .where("task", "=", task)
    .update({ completed: 1, notes }, "*")
    .then(result => result)
    .catch(err => console.log(err));
  // return db
  //   .query(
  //     "UPDATE goals SET completed = '1', notes = 'it was suprisingly tricky' WHERE task = $1 RETURNING *;",
  //     [task]
  //   )
  //   .then(result => result.rows);
};
exports.deleteTask = task => {
  console.log("in delete model", task);
  return connection("goals")
    .where("task", "=", task)
    .update({ deleted: 1 }, "*")
    .then(result => result)
    .catch(err => console.log(err));
  // return db
  //   .query("UPDATE goals SET deleted = '1' WHERE task = $1 RETURNING *;", [
  //     task
  //   ])
  //   .then(result => result.rows);
};
