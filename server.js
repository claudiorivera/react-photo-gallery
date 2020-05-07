require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const gallery = require("./routes/gallery.router");

const PORT = process.env.PORT;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/gallery", gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
