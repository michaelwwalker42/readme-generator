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
            message: 'Description of your project: ',
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
            name: 'installation',
            message: 'Installation instructions for your project: ',
            validate: instInput => {
                if (instInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information for your project: ',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide information on how to use the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Contribution guidelines: ',
            validate: contInput => {
                if (contInput) {
                    return true;
                } else {
                    console.log('Please provide information on how to contribute to the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Test instructions: ',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide test instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for your project: ',
            choices: ['MIT', 'GNU', "None"],
            validate: licInput => {
                if (licInput) {
                    return true;
                } else {
                    console.log('Please select a license for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username: ',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email address where you can be reached for additional questions about your project: ',
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

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README2.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

console.log('Answer the prompts to create your README.md file.')

promptUser()
.then(answers => {
    return generateMarkdown(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err);
})