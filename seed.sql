CREATE TABLE goals (goal_id SERIAL PRIMARY KEY, year INT, task TEXT, reason TEXT, completed BIT DEFAULT '0', deleted BIT DEFAULT '0', notes VARCHAR(500), created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, date_completed TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO goals (year, task) VALUES (2020, 'go to hull'), (2020, 'world peace'), (2020, 'healthier');

INSERT INTO goals (year, task, completed, notes, date_completed) VALUES (2020, 'cook lasagne', '1', 'was great', CURRENT_TIMESTAMP), (2020, 'fly', '1', 'was good', CURRENT_TIMESTAMP);


