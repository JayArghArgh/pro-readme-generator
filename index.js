"use strict";
// Setup our globals
const README_EXPORT = 'exports/README.md';
const README_TEMPLATE = require('./scripts/readme_template');
const licenseType = require('./scripts/license.js').licenseChoice;
const badges = require('./scripts/badges.js').badgeChoice;



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
		message: 'Insert your GitHub username: ',
		name: 'credits'
	},
	{
		type: 'list',
		message: 'Please select a license: ',
		name: 'license',
		choices: licenseType,
	},
	{
		type: 'checkbox',
		message: 'Some badges if you will? ',
		name: 'badges',
		choices: badges
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