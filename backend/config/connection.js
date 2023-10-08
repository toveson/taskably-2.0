const mysql = require('mysql2');
// require('dotenv').config();

let db;

// ***create mysql connection
if (process.env.MYSQL_URL) {
    db = mysql.createConnection(process.env.MYSQL_URL);
} else {
    db = mysql.createConnection({
        host: process.env.host,
        port: process.env.dbport,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        multipleStatements: true
    });
}
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('db Taskably2.0 connected');
});

// ***Export db
module.exports = db;