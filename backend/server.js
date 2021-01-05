// Dependencies
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});
require('dotenv').config();

// let db = require('./config/connection.js');
const routes = require('./routes/index.js');
// console.log('routes:', routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', function (socket) {
    socket.emit('hello');
});







app.use('/api/customers', routes.customers);
app.use('/api/stats', routes.stats);
app.use('/api/techs', routes.techs);
app.use('/api/inventory', routes.inventory);

//  setting up server
const PORT = process.env.PORT || 8081;

// Tells the server to begin listening
server.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));