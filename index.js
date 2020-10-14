const fs = require('fs')
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown.js')

const userQuestions = [
      {
        type: 'input',
        name: 'title',
        message: "Please enter your project's title."
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter a brief explanation on how to install your project.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and any examples needed for your project.'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please enter the Github URL of any project collaborator(s), separated by commas.'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any links and/or instructions on how users can contribute to your project.'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: [
          "Eclipse", 
          "ISC",
          "APACHE 2.0", 
          "MIT", 
          "MPL 2.0", 
          "None"
        ]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter any tests you have relating to your project.'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter your name.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
      },
      {
        type: 'input',
        name: 'alternative',
        message: 'Please enter any other information about your contact info and/or another communication method of your choice.',
      }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log("README has been successfully completed.")
  })
}

function init() {
  inquirer
  .prompt(userQuestions)
  .then(function (userResponse) {
    let userAnswers = JSON.stringify(userResponse)
    const markdown = generateMarkdown(userAnswers)
    writeToFile("./Test\ README\ sample/README.md", markdown)
  })
}

init();
