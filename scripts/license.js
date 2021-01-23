// Contains licenses and their respective badges
const licenseChoice = {
    "None": "[![None :)](https://img.shields.io/badge/Dev-None-&#58;&#41;-yellow)](https://img.shields.io/badge/Dev-&#58;&#41;-yellow)",
    'Apache License 2.0':
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]",
    "Boost Software License 1.0":
        "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 3-Clause License":
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Creative Commons":
        "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "GNU GPL v3":
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "The MIT License":
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0":
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Open Data Commons":
        "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
    "The Unlicense":
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
};

const getLicense = () => {
    let license = [];
    for (const [key] of Object.entries(licenseChoice)) {
        license.push(key);
    }
    return license;
}

const getButton = (myButton) => licenseChoice[myButton];

console.log(getButton("GNU GPL v3"));
// const getLicences

module.exports = {
    getLicense,
    getButton,
};