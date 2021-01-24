"use strict";
// Setup our globals
const README_EXPORT = 'exports/README.md';
const README_TEMPLATE = require('./scripts/readme_template');
// Required for execution
const inquirer = require('inquirer');
const fs = require('fs');
// Required for questions
const licenseType = require('./scripts/license.js').getLicense;

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
		message: 'Usage Instructions:',
		name: 'usage'
	},
	{
		type: 'input',
		message: 'Insert your GitHub username: ',
		name: 'credits'
	},
	{
		type: 'input',
		message: 'Please add a contact email:',
		name: 'email'
	},
	{
		type: 'list',
		message: 'Please select a license: ',
		name: 'license',
		choices: licenseType,
	},
	{
		type: 'input',
		message: 'How do I contribute? ',
		name: 'contribute'
	},
	{
		type: 'input',
		message: 'Define tests: ',
		name: 'tests'
	},

])
.then((response) => {
	// Turn the object into an array and parse this to the funciton.
	let responseArray = [];
	for (const item in response){
		responseArray.push(response[item]);
	}
	// Merge the responses with the template.
	let readme = README_TEMPLATE.readmeTemplate(...responseArray);
	// Write the readme to the exports file.
	fs.writeFile(README_EXPORT, readme, (err) =>
		err ? console.error(err) : console.log('File exported')
	);
});

// TODO Badges! WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO Check links again WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README