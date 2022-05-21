import chalk from 'chalk';
import inquirer from 'inquirer';
import Table from 'cli-table';

import questions from '../static/questions.js';
import Languages from './Languages.js';

export const initHandler = async (argv) => {
    try {
        console.log(chalk.yellow.bold('🤖 Welcome to Boilers 🤖'));

        const { name } = await inquirer.prompt(questions.name);
        const { language } = await inquirer.prompt(questions.languages);
        const { features } = await inquirer.prompt(
            questions[language].features
        );
        const { confirm } = await inquirer.prompt(questions.confirm);

        if (!confirm) return console.log('see you later!');
        console.log(chalk.green.bold('✔ Initial setup done'));

        await Languages[language](name, features);
    } catch (error) {
        console.error(error.message);
    }
};

export const listHandler = () => {
    try {
        var table = new Table({
            head: ['No', 'Language', 'Features'],
            colWidths: [5, 20, 50],
            colAligns: ['middle', 'middle', 'left'],
        });

        table.push(
            ['1', 'React', 'React Router, Redux, Context API, TailwindCSS'],
            ['2', 'Node', 'Express, MongoDB, dotenv, JWT']
        );

        console.log(table.toString());
    } catch (error) {
        console.error(error.message);
    }
};

export const createHandler = () => {};
