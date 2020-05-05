const express = require("express");
const router = express.Router();
const pgp = require("pg-promise")();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Postgres config
const dbConnectionConfig = {
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  max: 30, // use up to 30 connections
};
const db = pgp(dbConnectionConfig);

router.put("/like/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = await db.query(
      "UPDATE gallery SET likes = likes + 1 WHERE id = $1",
      [id]
    );
    res.status(200).send(`Added a like for photo with id: ${id}`);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const query = await db.any("SELECT * FROM gallery ORDER BY id ASC");
    res.status(200).json(query);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
