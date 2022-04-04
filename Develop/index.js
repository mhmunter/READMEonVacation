// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "project",
    message: "Enter project name"
},{
type: "input",
name: "github",
message: "Enter github name"
},{
    type: "input",
    name: "discription",
    message: "Give a discription of your project" 
},{
    type: "list",
    name: "license",
    message: "What license would you like to use on your project",
    choices: ["MIT", "GNU", "Apeche" ]

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data)
console.log(fileName)
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((answers) =>{
console.log(answers)

const template = generateMarkdown(answers)
writeToFile("READ.md", template)

console.log(generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
