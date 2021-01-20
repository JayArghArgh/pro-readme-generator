"use strict";
const OUT_FILENAME = 'exports/README.md';

const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
	{
		type: 'input',
		message: 'name of file',
		name: 'name'
	}
])
.then((response) => {
	fs.writeFile(OUT_FILENAME, `${JSON.stringify(response)}\n`, (err) =>
		err ? console.error(err) : console.log('File exported')
	);
});