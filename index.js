"use strict";
// Setup our globals
const README_EXPORT = 'exports/README.md';
const README_TEMPLATE = require('./templates/readme_template');
const LICENSE_CHOICE = [
	'None',
	'Apache License 2.0',
	'GNU General Public License 2.0',
	'MIT License',
	'BSD 2-Clause "Simplified" License',
	'BSD 3-Clause "New" or "Revised" License',
	'Boost Software License 1.0',
	'Creative Commons Zero v1.0 Universal',
	'Eclipse Public License 2.0',
	'GNU Affero General Public License v3.0',
	'GNU General Public License V2.0',
	'GNU Lesser General Public License v2.1',
	'Mozilla Public License 2.0',
	'The Unlicense',
];

const inquirer = require('inquirer');
const fs = require('fs');

// Question the user.
inquirer.prompt([
	{
		type: 'input',
		message: 'Project Title: ',
		name: 'projectTitle'
	},
	{
		type: 'input',
		message: 'Description of project: ',
		name: 'description'
	},
	{
		type: 'confirm',
		message: 'Do you require a table of contents? ',
		name: 'toc',
		default: true
	},
	{
		type: 'input',
		message: 'Installation instructions: ',
		name: 'installation'
	},
	{
		type: 'input',
		message: 'Usage Instructions',
		name: 'usage'
	},
	{
		type: 'input',
		message: 'Insert names of contributors, and their github name: ',
		name: 'credits'
	},
	{
		type: 'list',
		message: 'Please select a license: ',
		name: 'license',
		choices: LICENSE_CHOICE,
	},
	{
		type: 'input',
		message: 'Some badges if you will? ',
		name: 'badges'
	},
	{
		type: 'input',
		message: 'How do I contribute? ',
		name: 'contribute'
	},
	{
		type: 'input',
		message: 'Got any tests? ',
		name: 'tests'
	},

])
.then((response) => {
	// Turn the object into an array and parse this to the funciton.
	let responseArray = [];
	for (const item in response){
		responseArray.push(response[item]);
	}
	console.log(responseArray);
	// Merge the responses with the template.
	let readme = README_TEMPLATE.readmeTemplate(...responseArray);
	fs.writeFile(README_EXPORT, readme, (err) =>
		err ? console.error(err) : console.log('File exported')
	);
});