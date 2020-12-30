// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();

// let db = require('./config/connection.js');
const routes = require('./routes/index.js');
// console.log('routes:', routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/customers', routes.customers);
app.use('/api/stats', routes.stats);
app.use('/api/techs', routes.techs);
app.use('/api/inventory', routes.inventory);

//  setting up server
const PORT = process.env.PORT || 8081;

// Tells the server to begin listening
app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));