require("dotenv").config();
const express = require("express");
const app = express();
const gallery = require("./routes/gallery.router");

const PORT = process.env.SERVER_PORT;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/gallery", gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
