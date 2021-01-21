"use strict";
const OUT_FILENAME = 'exports/README.md';
const doReadMe = require('./templates/readme_template');

const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
	{
		type: 'input',
		message: 'name of file',
		name: 'name'
	},
	{
		type: 'input',
		message: 'name of file',
		name: 'description'
	}
])
.then((response) => {
	let readme = doReadMe.readmeTemplate(response.name, response.description);
	fs.writeFile(OUT_FILENAME, readme, (err) =>
		err ? console.error(err) : console.log('File exported')
	);
});