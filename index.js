const fs = require('fs')
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
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
        name: 'credits',
        message: 'Please enter the names of any project collaborators, separated by commas.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
      },
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
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: [
          "APACHE 2.0", 
          "MIT", 
          "GPL 3.0", 
          "MPL 2.0", 
          "None"
        ]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter any tests you have relating to your project.'
      }
];

function writeToFile(fileName, data) {

}

function init() {

}

init();
