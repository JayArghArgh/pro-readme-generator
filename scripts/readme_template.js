// Set the user profile generator up and the table of contents.
const authorCredits = (author) => `[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=${author}&theme=solarized-light)](https://github.com/${author}/github-readme-stats)\n\n[${author}](https://www.github.com/${author})`
const contentHeadings = require('./headings').createHeading;
const getBadges = require('./badges').separateBadges;
const tableContents = ["Description", "Installation", "Usage", "Credits", "License", "Badges", "Contribute", "Tests"];

const readmeTemplate = (
	projectTitle,
	description,
	installation,
	usage,
	credits,
	license,
	badges,
	contribute,
	tests
) => {
	// Creates a readme from the given parameters.
	let return_template = `# ${projectTitle}
___
# Contents
${contentHeadings(tableContents)}
# ${tableContents[0]}
${description}
# ${tableContents[1]}
${installation}
# ${tableContents[2]}
${usage}
# ${tableContents[3]}
${authorCredits(credits)}
# ${tableContents[4]}
${license}
# ${tableContents[5]}
${getBadges(badges)}
# ${tableContents[6]}
${contribute}
# ${tableContents[7]}
${tests}


> This README.md created with pro-readme-generator

[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

[![JayArghArgh](https://img.shields.io/badge/Dev-JayArghArgh-yellow)](https://img.shields.io/badge/Dev-JayArghArgh-yellow)
`;

	return return_template;
}


module.exports = {
	readmeTemplate,
};