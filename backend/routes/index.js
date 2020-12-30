const customers = require('./customers.js');
const stats = require('./stats.js');
const techs = require('./techs.js');
const inventory = require('./inventory.js');

// console.log('testing index');

module.exports = { customers, stats, techs, inventory };

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
