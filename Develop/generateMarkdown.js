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

// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);

  return `
  ${licenseBadge} 
  # ${data.projecttitle}
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contribute](#contribute)\n
  [Questions] (#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project is licensed under ${data.license} license.\n
  ${licenseBadge} 
  ## Contribute
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  For any questions, please contact \n
  ${data.email}\n
  [GitHub](https://github.com/${data.username})

`
}

module.exports = generateMarkdown;

