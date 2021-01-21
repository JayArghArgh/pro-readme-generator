function table_contents() {
	const table_of_contents = '\n### Table of Contents\nheya\n\n***';
	return table_of_contents;
}

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
) => {
	let table_of_contents = '';
	if (toc) {
		table_of_contents = table_contents();
	}
	let return_template = `# ${projectTitle}
### Description
${description}
### TOC
${table_of_contents}
### Installation
${installation}
### Usage
${usage}
### Credits
${credits}
### License
${license}
### Badges
${badges}
### Contributing
${contribute}
### Tests
${tests}

> This README.md created with pro-readme-generator by [@jayarghargh](https://github.com/JayArghArgh)`;

	return return_template;
}


module.exports = {
	readmeTemplate,
};