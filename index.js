// Include packages needed for this application
let inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projecttitle',
        message: 'Enter the name of the Project',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Select license for the Project',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'github-username',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter Project Description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation Instructions for your Project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how to use your Project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter how to test your Project',
    },
    {
        type: 'input',
        name: 'projecttitle',
        message: 'Enter a name of the Project',
    },



]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }
inquirer.prompt(questions);
// Function call to initialize app
init();
