import chalk from 'chalk';

const questions = {
    name: {
        type: 'input',
        name: 'name',
        message: chalk.blueBright('What about project name?'),
        default: 'new-project',
        validate: (input) => {
            if (input.trim().length > 0) return true;
            else return 'Please enter a valid name.';
        },
    },
    languages: {
        type: 'list',
        name: 'language',
        message: chalk.blueBright('What would you like to use?'),
        choices: ['react', 'node'],
    },
    react: {
        features: {
            type: 'checkbox',
            name: 'features',
            message: chalk.blueBright('What would you like to add?'),
            choices: ['react-router', 'contextAPI', 'redux', 'tailwind'],
        },
        extras: {
            type: 'checkbox',
            name: 'extras',
            message: chalk.blueBright('Would you like to add these in?'),
            choices: [
                {
                    name: 'Security Best Practices',
                    value: 'SBP',
                    checked: true,
                },
                {
                    name: 'The Open Graph Protocol',
                    value: 'OGP',
                    checked: true,
                },
                {
                    name: 'CSS Best Practices',
                    value: 'CBP',
                    checked: true,
                },
            ],
        },
    },
    node: {
        features: {
            type: 'checkbox',
            name: 'features',
            message: 'What would you like to add?',
            choices: ['dotenv', 'mongoose', 'bcrypt', 'jsonwebtoken'],
        },
    },
    confirm: {
        type: 'confirm',
        name: 'confirm',
        default: false,
        message: chalk.blueBright('Are you sure to continue?'),
    },
};

export default questions;
