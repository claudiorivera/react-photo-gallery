require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const gallery = require("./routes/gallery.router");

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// Routes
app.use("/gallery", gallery);

// Start server
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
