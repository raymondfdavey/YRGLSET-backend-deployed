BASICALLY

GET /api/:year

returns all of the tasks complete and not complete and deleted for that year

POST /api/:year

creates a new task and returns the created task

accepts an object like {task: "blah blah", reason: "more blah blah"}

PATCH /api/:year

updates the task to being complete with an added

accepts an object like {task: "blah blah"}

DELETE /api/:year

updates the task to being deleted (NOT DELETED FROM DATABASE)

accepts an object like {task: "blah blah}
