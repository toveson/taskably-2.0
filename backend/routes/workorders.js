const db = require('../config/connection.js');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send('testing workorders');
// });

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM v_workorder';
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        // console.log(rows);
        res.send(rows);
    });
});

router.post('/new-wo', (req, res) => {
    let sql = 'call newWO(@id,?,?,?,?,?,?); select @id id, concat(\'WO \', @id,\' added successfuly\') as new_msg;';
    db.query(sql, [req.body.p_pr_cd, req.body.p_rsn_cd, req.body.p_cust_id, req.body.p_sta_cd, req.body.p_tech_id, req.body.p_appt]
        , (err, rows) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send(err);
            }
            console.log(rows);
            res.send(rows);
        });
});

router.put('/upd-wo/:id', (req, res) => {
    const sql = 'call updWO(?,?,?,?,?,?,?)';
    db.query(sql, [req.params.id, req.body.p_pr_cd, req.body.p_rsn_cd, req.body.p_cust_id, req.body.p_sta_cd, req.body.p_tech_id, req.body.p_appt], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err);
        }
        // console.log(rows);
        res.send(rows);
    });
});

module.exports = router;