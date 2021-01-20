"use strict"; 

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
	console.log(`here is ${response.name}`);
})