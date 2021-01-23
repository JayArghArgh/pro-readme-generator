const badgeChoice = [
    '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)',
    '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)',
    '[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)',
    '[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)',
    '[![forthebadge cc-0](http://ForTheBadge.com/images/badges/cc-0.svg)](http://ForTheBadge.com)',
    '[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)',
];

const separateBadges = (badges) => {
    // Separates the selected badges and returns them.
    let badge;
    let splitBadges = "";
    for (badge in badges) {
        splitBadges += `${badges[badge]} `
    }
    return splitBadges;
}

module.exports = {
    badgeChoice,
    separateBadges,
};