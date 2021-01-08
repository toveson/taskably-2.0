const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing techs');
// });

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM v_techs';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.post('/new-tech', (req, res) => {
    let sql = 'call newTech(@tech_id,?,?,?,?,?); select concat(\'tech \', @tech_id,\' added successfully\') as new_tech;';
    db.query(sql, [req.body.p_first_name, req.body.p_last_name, req.body.p_email, req.body.p_phone, req.body.p_rgn_cd]
        , (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            // console.log(rows);
            res.send(rows);
        });
});

module.exports = router;