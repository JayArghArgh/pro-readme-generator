// Set the user profile generator up and the table of contents.
const contentHeadings = require('./headings').createHeading;
const getCredits = require('./credits');
const getLicenseBadge = require('./license').getButton;
const tableContents = ["Description", "Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"];

const readmeTemplate = (
	projectTitle,
	description,
	installation,
	usage,
	credits,
	email,
	license,
	contribute,
	tests,
) => {
	// Creates a readme from the given parameters.
	let return_template = `${getLicenseBadge(license)}
# ${projectTitle}
## ${tableContents[0]}
${description}
## ${tableContents[1]}
${contentHeadings(tableContents)}
## ${tableContents[2]}
${installation}
## ${tableContents[3]}
${usage}
## ${tableContents[4]}
This application is covered under ${license}.
## ${tableContents[5]}
${contribute}
## ${tableContents[6]}
${tests}
## ${tableContents[7]}
Please refer any questions to ${getCredits.authorButton(credits)} via ${email}.\n
${getCredits.authorProfile(credits)}


> ${getCredits.authorButton('JayArghArgh')} This README.md created with [![repo](https://img.shields.io/badge/Git-ProReadMe-green)](https://github.com/JayArghArgh/pro-readme-generator).

`;

	return return_template;
}


module.exports = {
	readmeTemplate,
};