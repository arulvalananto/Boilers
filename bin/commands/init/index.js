import inquirer from 'inquirer';

import { bold } from '../../utils/helpers.js';
import Languages from '../../utils/Languages.js';
import constants from '../../static/constants.js';
import questions from '../../static/questions.js';

const INIT = constants.COMMANDS.INIT;

const initHandler = async () => {
    try {
        console.log(bold(constants.MESSAGE.INTRO));

        const { name } = await inquirer.prompt(questions.name);
        const { language } = await inquirer.prompt(questions.languages);
        const { features } = await inquirer.prompt(
            questions[language].features
        );
        const { confirm } = await inquirer.prompt(questions.confirm);

        if (!confirm) return console.log(bold(constants.MESSAGE.BYE, 'red'));
        console.log(bold(constants.MESSAGE.INITIAL_SETUP_DONE, 'green'));

        await Languages[language](name, features);
    } catch (error) {
        console.error(error.message);
    }
};

const initCommand = {
    command: INIT.COMMANDS,
    description: INIT.DESCRIPTION,
    handler: initHandler,
    builder: () => {},
};

export default initCommand;
