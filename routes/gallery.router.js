const express = require("express");
const router = express.Router();
const pgp = require("pg-promise")();

// Postgres config
const db = pgp(process.env.DB_URI);

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
