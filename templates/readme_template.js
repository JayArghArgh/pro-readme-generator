const readmeTemplate = (
	projectTitle,
	description,
	toc,
	installation,
	usage,
	credits,
	license,
	badges,
	contribute,
	tests
) =>
`# ${projectTitle}
## Description
${description}
## Table of Contents
${toc}
## Installation
${installation}
## Usage
${usage}
## Credits
${credits}
## License
${license}
## Badges
${badges}
## Contributing
${contribute}
## Tests
${tests}

> This README.md created with pro-readme-generator by @jayarghargh`;

module.exports = {
	readmeTemplate,
};