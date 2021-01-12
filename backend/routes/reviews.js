const db = require('../config/connection.js');
const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('testing reviews');
});

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM v_review';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.post('/new-review', (req, res) => {
    let sql = 'call newReview(@rev_id,?,?,?,?); select concat(\'Review \', @rev_id,\' added successfully\') as new_review;';
    db.query(sql, [req.body.p_cust_id, req.body.p_wo_id, req.body.p_rating, req.body.p_review]
        , (err, rows) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send(err);
            }
            console.log(rows);
            res.send(rows);
        });
});

module.exports = router;