const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  development: {
    username: process.env.DATABASE_USERID,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,    
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
    timezone:"+9:00"

  },
  test: {
    username: process.env.DATABASE_USERID,
    password: process.env.DATABASE_PASSWORD,
    database: "",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  },
  production: {
    username: process.env.DATABASE_USERID,
    password: process.env.DATABASE_PASSWORD,
    database: "",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  }
}

