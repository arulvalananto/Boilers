import inquirer from 'inquirer';

import { bold } from '../../utils/helpers.js';
import Languages from '../../utils/Languages.js';
import constants from '../../static/constants.js';
import questions from '../../static/questions.js';

const { COMMANDS, MESSAGE, COLORS } = constants;

const initHandler = async () => {
    try {
        console.log(bold(MESSAGE.INTRO));

        const { name, language } = await inquirer.prompt([
            questions.name,
            questions.languages,
        ]);

        const { features, optionalFeatures, confirm } = await inquirer.prompt([
            questions[language].features,
            questions[language].optionalFeatures,
            questions.confirm,
        ]);

        if (!confirm) {
            console.log(bold(MESSAGE.BYE, COLORS.red));
            return;
        }
        console.log(bold(MESSAGE.INITIAL_SETUP_DONE, COLORS.green));

        // await Languages[language](name, features, optionalFeatures);
    } catch (error) {
        console.error(error.message);
    }
};

const initCommand = {
    command: COMMANDS.INIT.COMMANDS,
    description: COMMANDS.INIT.DESCRIPTION,
    handler: initHandler,
    builder: () => {},
};

export default initCommand;
