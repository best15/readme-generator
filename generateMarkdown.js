// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = '';

  switch (license) {

    case "Apache":
      licenseBadge = `[![License-Apache](https://img.shields.io/badge/license-Apache-blue)](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case "BSD":
      licenseBadge = `[![License-BSD-3](https://img.shields.io/badge/license-BSD-green)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;


    case "MIT":
      licenseBadge = `[![License-MIT](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)`;
      break;

    case "Mozilla":
      licenseBadge = `[![License-Mozilla](https://img.shields.io/badge/license-GPL-blue)](https://opensource.org/licenses/MPL-2.0)`;
      break;

    case "Eclipse":
      licenseBadge = `[![License-Eclipse](https://img.shields.io/badge/license-GPL-blue)](https://opensource.org/licenses/EPL-2.0)`;
      break;

    default:
      break;


  }

  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.projecttitle}\n## Description\n${data.description}\n## Installation\n${data.installation}\n## usage\n${data.usage}\n## license\n${data.license}${licenseBadge} \n## contribute\n${data.contribute}## test\n${data.test}\n## Question\n;

`;
}

module.exports = generateMarkdown;
