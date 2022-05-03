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
      choices: ['redux', 'contextAPI', 'tailwind', 'typescript'],
    },
  },
  node: {
    features: {
      type: 'checkbox',
      name: 'features',
      message: 'What would you like to add?',
      choices: ['express', 'koa', 'typescript', 'dotenv', 'mongoose'],
    },
  },
  confirm: {
    type: 'confirm',
    name: 'confirm',
    message: chalk.blueBright('Are you sure to continue?'),
  },
};

export default questions;
