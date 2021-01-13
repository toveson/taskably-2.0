const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing inventory');
// });

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM v_inventory';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/inv-installed', (req, res) => {
    const sql = 'SELECT * FROM v_invInstalled';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

module.exports = router;