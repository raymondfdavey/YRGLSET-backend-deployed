const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};

const customConfig = {
  development: {
    connection: {
      database: "usergoals"
    }
  },
  test: {
    connection: {
      database: "usergoals_test"
    }
  },
  production: {
    // rejectUnauthorized: true,
    // connection: `${DB_URL}?ssl=true`,
    connection: {
        connectionString: DB_URL,
        ssl: { rejectUnauthorized: false },
      },
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
