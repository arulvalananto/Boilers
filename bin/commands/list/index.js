import Table from 'cli-table';

import constants from '../../static/constants.js';

const listHandler = () => {
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

const listCommand = {
    command: constants.COMMANDS.LIST.COMMANDS,
    description: constants.COMMANDS.LIST.DESCRIPTION,
    builder: () => {},
    handler: listHandler,
};

export default listCommand;
