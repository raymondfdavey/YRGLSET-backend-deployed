const ENV = process.env.NODE_ENV || "development";
const testData = require("./test-data/goals");
const devData = require("./development-data/goals");

const data = {
  development: devData,
  test: testData,
  production: devData
};

module.exports = data[ENV];
