export default {
    SCRIPT_NAME: 'boilers',
    CLI_USAGE:
        '$0 is a CLI tool that used to simplify the process of boilerplate code generation. \n\n To start using it, run `$0 init` or `$0 i`.',
    COMMANDS: {
        INIT: {
            COMMANDS: ['init', 'i'],
            DESCRIPTION: 'Initialize a new boilerplate project.',
        },
        LIST: {
            COMMANDS: ['list', 'ls'],
            DESCRIPTION: 'List all available boilerplate or template.',
        },
    },
    PACKAGES: {
        REACT: {
            CONTEXTAPI: '',
            REACT_ROUTER: 'react-router-dom',
            TAILWIND:
                '-D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
            REDUX: '--save @reduxjs/toolkit react-redux',
            TYPESCRIPT:
                '--save typescript @types/node @types/react @types/react-dom @types/jest',
        },
    },
    MESSAGE: {
        INTRO: '🤖 Welcome to Boilers 🤖',
        INITIAL_SETUP_DONE: '✔ Initial setup done',
        BYE: 'Okay! See you later 🥺',
    },
};
