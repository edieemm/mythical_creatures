const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET students
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM "creatures"`;
    pool.query(sqlText)
        .then((result) => {
            console.log(result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;
