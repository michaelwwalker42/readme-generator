const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of your project',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation instructions',
            message: 'Installation instructions for your project',
            validate: instInput => {
                if (instInput) {
                    return true;
                } else {
                    console.log('You must provide installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage information',
            message: 'Usage information for your project',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You must provide information on how to use the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'Contribution guidelines',
            validate: contInput => {
                if (contInput) {
                    return true;
                } else {
                    console.log('Provide information on how to contribute to the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'Test instructions',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Provide test instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Select the licenses for your project',
            choices: ['MIT', 'GNU'],
            validate: licInput => {
                if (licInput) {
                    return true;
                } else {
                    console.log('Select a license for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address where you can be reached for additional questions about your project',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address.');
                    return false;
                }
            }
        },
    ])
}