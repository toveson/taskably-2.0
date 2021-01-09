const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing lookups');
// });

router.get('/region', (req, res) => {
    const sql = 'SELECT * FROM v_lkprgn';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/products', (req, res) => {
    const sql = 'SELECT * FROM v_lkpproducts';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/reason', (req, res) => {
    const sql = 'SELECT * FROM v_lkpreason';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/roles', (req, res) => {
    const sql = 'SELECT * FROM v_lkproles';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/status', (req, res) => {
    const sql = 'SELECT * FROM v_lkpstatus';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.get('/state', (req, res) => {
    const sql = 'SELECT * FROM v_lkpstate';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

module.exports = router;