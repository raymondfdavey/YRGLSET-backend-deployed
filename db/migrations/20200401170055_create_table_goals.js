exports.up = function(knex) {
  console.log("rolling forward");
  return knex.schema.createTable("goals", goalsTable => {
    goalsTable
      .increments("goal_id")
      .primary()
      .unique();
    goalsTable.integer("year").notNullable();
    goalsTable.text("task", "mediumtext").notNullable();
    goalsTable.text("reason", "mediumtext");
    goalsTable.boolean("completed").defaultTo(false);
    goalsTable.boolean("deleted").defaultTo(false);
    goalsTable.text("notes", "mediumtext");
    goalsTable.timestamp("created");
    goalsTable.timestamp("completed_at");
  });
};

exports.down = function(knex) {
  console.log("rolling back");

  return knex.schema.dropTable("goals");
};
