const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing stats');
// });

router.get('/getcountWO', (req, res) => {
    const sql = 'SELECT * FROM v_countWO';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/getcountRsn', (req, res) => {
    let sql = 'SELECT * FROM v_countRsn';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/getTotInv', (req, res) => {
    let sql = 'SELECT * FROM v_tot_inv';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});


module.exports = router;