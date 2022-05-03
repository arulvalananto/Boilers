/* eslint-disable max-len */
const packages = {
    react: {
        contextAPI: '',
        'react-router': 'react-router-dom@6',
        tailwind:
            '-D tailwindcss postcss autoprefixer && npx tailwindcss init -p',
        redux: '--save @reduxjs/toolkit react-redux',
        typescript:
            '--save typescript @types/node @types/react @types/react-dom @types/jest',
    },
    node: {
        dotenv: 'dotenv',
    },
};

export default packages;
