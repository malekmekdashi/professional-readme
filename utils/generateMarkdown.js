// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "GNU":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project uses ${license} license to cover it. For more infmoration, click on the license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseLink(data.license)}
  
  ## Table of Contents
  * [Description](#description)
  * [Licenses](#licenses)
  * [Contributions](#contributions)
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contact Information](#Contact-Information)
  * [Credits](#credits)
  
  ## Description
  ${data.description}
  
  ${renderLicenseSection(data.license)}

  ## Contributions
  

  ## Installation Instructions
  

  ## Usage
  

  ## Test
  

  ## Contact Information
  Github: https://github.com/${data.github}
  Email: ${data.email}

  ## Credits
  ${data.name}

`;
}

module.exports = generateMarkdown;

