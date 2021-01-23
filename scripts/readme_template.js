const tableContents = () =>`\n### Table of Contents\nINSERT TOC\n***`;
const authorCredits = (author) => `[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=${author}&theme=solarized-light)](https://github.com/${author}/github-readme-stats)\n[${author}](https://www.github.com/${author})`

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

	// Line up the Table of Contents/
	if (toc) {
		toc = tableContents();
	}

	// Add the credits
	credits = authorCredits(credits);

	// Add the badges.
	let splitBadges;
	let x = 0;
	for ( x in badges ){
		console.log(x, "badgey");
		splitBadges += `${badges[x]} `
	}
	badges = splitBadges;

	let return_template = `# ${projectTitle}
### Description
${description}
### TOC
${toc}
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

> This README.md created with pro-readme-generator by [@jayarghargh](https://github.com/JayArghArgh)
> [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

`;

	return return_template;
}


module.exports = {
	readmeTemplate,
};