const inquirer = require("inquirer");
var fs = require('fs');


// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your app?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your app?"
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your app?",
    default: "npm install"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide any use instructions for your app?"
  },
  {
    type: 'list',
    message: "Which license will your app be published under?",
    name: 'license',
    choices: [
      'MIT',
      'Apache',
      'GPL'
    ],
    default: 'MIT'
  },

  //   * Contributing
  //   * Tests
  //   * Questions

];
inquirer.prompt(questions).then(function (data) {

  console.log(data);

  // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

  //   if (err) {
  //     return console.log(err);
  //   }

  //   console.log("Success!");

  // });
});

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
