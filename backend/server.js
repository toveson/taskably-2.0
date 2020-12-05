// Dependencies
const express = require('express');

//  setting up server
const PORT = process.env.PORT || 8080;
const app = express();

// Tells the server to begin listening
app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));