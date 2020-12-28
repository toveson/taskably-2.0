const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing customers');
// });

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM v_customers';
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        // console.log(results);
        res.send(results);
    });
});

module.exports = router;