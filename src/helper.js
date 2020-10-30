require('dotenv').config();

const log = require("./logger").configLogger(
    process.env.log_level || "debug",
    "default"
  );

module.exports = {

}