const customers = require('./customers.js');
const stats = require('./stats.js');

console.log('testing index');

module.exports = { customers, stats };

// app.get('/', (req, res) => {
//     let sql = 'SELECT * FROM v_manager';
//     let query = db.query(sql, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         // console.log(results);
//         res.send(results);
//     });
// });

// app.get('/getcountWO', (req, res) => {
//     let sql = 'SELECT * FROM v_countWO';
//     let query = db.query(sql, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         console.log(results);
//         res.send(results);
//     });
// });

// app.get('/getcountRsn', (req, res) => {
//     let sql = 'SELECT * FROM v_countRsn';
//     let query = db.query(sql, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         console.log(results);
//         res.send(results);
//     });
// });

// app.get('/getinventory', (req, res) => {
//     let sql = 'SELECT * FROM v_inventory';
//     let query = db.query(sql, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         console.log(results);
//         res.send(results);
//     });
// });

// app.get('/getusers', (req, res) => {
//     let sql = 'SELECT * FROM v_users';
//     let query = db.query(sql, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         console.log(results);
//         res.send(results);
//     });
// });

// app.post('/api/new-customer', (req, res) => {
//     let sql = 'call newCustomer(?,?,?,?,?,?,?,?)';
//     // let sql = 'call newCustomer(?)';
//     let query = db.query(sql, [req.body.p_first_name, req.body.p_last_name, req.body.p_email, req.body.p_address, req.body.p_city, req.body.p_state, req.body.p_zip, req.body.p_phone]
//         // let query = db.execute(sql, ['Lorry', 'Merrilees', 'lmerrileesdt@nbcnews.com', '6 Lakewood Circle', 'Spring', 'TX', 77388, '409-796-9418']
//         , (err, results) => {
//             if (err) {
//                 console.error(err.message);
//             }
//             console.log('+++++++++++query: ', query);
//             console.log(results);
//             res.json(results);
//         });
// });
