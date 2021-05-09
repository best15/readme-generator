//packages needed for this application
let inquirer = require("inquirer");
let generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projecttitle',
        message: 'Enter the name of the Project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license for the Project',
        choices: ["Apache","BSD", "MIT", "Mozilla","Eclipse"]
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'username',
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
        name: 'contribute',
        message: 'Enter how others could contribute to your project',
    },



]

//function to write README file
function writeToFile(data) { 
  let markdownfile = generateMarkdown(data)  ;

fs.writeFile("README.md" ,markdownfile, (err) =>
err ? console.log(err) : console.log("sucess!"));

}

//function to initialize app
function init() { 
   
    inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
