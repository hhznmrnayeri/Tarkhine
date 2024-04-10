"use strict";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("db connections successful!"))
  .catch((err) => console.log("con not connect", err));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
