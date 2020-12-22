const mysql = require('mysql');
require('dotenv').config();

let db;

// ***create mysql connection
if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    db = mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
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