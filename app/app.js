/**
 * @fileoverview Main file for the server
 * @author dyang
 */

//---------------------------------------------------
// Modules
//---------------------------------------------------
const express = require('express');

//---------------------------------------------------
// Constants
//---------------------------------------------------
const app = express(),
	port = 3000;

app.get('/', express.static(`${__dirname}/public`));

app.listen(port, (err) => {
	if (err) return console.log('Error', err);

	console.log(`Server is listening to ${port}`);
});
