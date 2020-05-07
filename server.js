require("dotenv").config();
const express = require("express");
const app = express();
const gallery = require("./routes/gallery.router");

const PORT = process.env.PORT;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.static("/client/build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/gallery", gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
