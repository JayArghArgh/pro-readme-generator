const authorProfile = (author) =>
    `[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=${author}&theme=solarized-light)](https://github.com/${author}/github-readme-stats)`;

const authorButton = (author) =>
    `[![author](https://img.shields.io/badge/Dev-${author}-yellow)](https://img.shields.io/badge/Dev-${author}-yellow)`;

module.exports = {
    authorProfile,
    authorButton,
};