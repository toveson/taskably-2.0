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

router.post('/api/new-customer', (req, res) => {
    let sql = 'call newCustomer(?,?,?,?,?,?,?,?)';
    let query = db.query(sql, [req.body.p_first_name, req.body.p_last_name, req.body.p_email, req.body.p_address, req.body.p_city, req.body.p_state, req.body.p_zip, req.body.p_phone]
        , (err, results) => {
            if (err) {
                console.error(err.message);
            }
            console.log('+++++++++++query: ', query);
            console.log(results);
            res.json(results);
        });
});

module.exports = router;