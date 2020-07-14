require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev"
});

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PSWD,
  database: process.env.DB_NAME,
  host:     process.env.DB_HOST,
  dialect:  "postgres"
}