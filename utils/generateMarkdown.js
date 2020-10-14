function generateMarkdown(data) {
  // Variables
  const userData = JSON.parse(data)
  let badge = ""

  // Badges
if (userData.license === "Eclipse") {
  badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (userData.license === "ISC") {
    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (userData.license === "APACHE 2.0") {
    badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (userData.license === "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (userData.license === "MPL 2.0") {
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (userData.license === "None") {
    `[![License: None]`
  }

// Markdown Start
  return `# ${userData.title}

  ## Description: 
  ${userData.description}

  ## Table of Contents:
  * Installation
  * Usage
  * Credits
  * License
  * Contributing
  * Tests

  ## Installation:
  ${userData.installation}

  ## Usage
  ${userData.usage}

  ## Credits
  ${userData.credits}

  ## License
  ${userData.license} 
  ${badge}

  ## Tests
  ${userData.tests}



  ${userData.name}
  ${userData.github}
  ${userData.email}
`;
}

module.exports = generateMarkdown;
