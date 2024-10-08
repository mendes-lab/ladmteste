const dotenv = require("dotenv");

dotenv.config({
  path: ".env.development",
});
const nextJest = require("next/jest");

const creatJEstConfig = nextJest({
  dir: ".",
});
const jestConfig = creatJEstConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
});

module.exports = jestConfig;
