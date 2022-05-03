/* eslint-disable max-len */
const packages = {
  contextAPI: '',
  tailwind: [
    '-D tailwindcss postcss autoprefixer',
    'npx tailwindcss init -p',
  ],
  redux: '--save @reduxjs/toolkit react-redux',
  typescript:
        '--save typescript @types/node @types/react @types/react-dom @types/jest',
  dotenv: 'dotenv',
};

export default packages;
