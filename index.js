// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please enter project title:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'list',
            choices: ['MIT', 'Apache', 'GNU'],
            name: 'license',
            message: 'What licenses did you use for this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'please leave a brief description of your project:',
        },
        
    ])
}
// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise(() => {
    fs.writeFile('./dist/README.md', data, err =>{
      err ? console.log(err) : console.log('Success! You have creadted a new README file.')
    })
    })
}    

// TODO: Create a function to initialize app
const init = () => {
   questions() 
    .then(userInput => {
         return generateMarkdown(userInput);
     })
     .then(readmeInfo => {
         return writeToFile(readmeInfo);
     })
     .catch(err => {
         console.log(err);
     })
 };
 
// Function call to initialize app
init();
