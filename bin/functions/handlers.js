import chalk from 'chalk';
import inquirer from 'inquirer';

import questions from '../static/questions.js';
import Languages from './Languages.js';

export const initHandler = async (argv) => {
    try {
      console.log(chalk.yellow.bold('🥚 Welcome to Boilers 🥚'));

      const { name } = await inquirer.prompt(questions.name);
      const { language } = await inquirer.prompt(questions.languages);
      const { features } = await inquirer.prompt(questions[language].features);
      const { confirm } = await inquirer.prompt(questions.confirm);

      if (!confirm) return console.log('see you later!');
      console.log(chalk.green.bold('✔ Initial setup done'));

      await Languages[language](name, features);
    } catch (error) {
      console.error(error.message)
    }
};

export const listHandler = () => {};

export const createHandler = () => {};
