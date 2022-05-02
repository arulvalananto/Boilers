const packages = {
  contextAPI: "",
  tailwind: ["-D tailwindcss postcss autoprefixer", "npx tailwindcss init -p"],
  redux: "--save @reduxjs/toolkit react-redux",
  typescript:
    "--save typescript @types/node @types/react @types/react-dom @types/jest",
  express: "express",
  koa: "koa",
  dotenv: "dotenv",
  mongoose: "mongoose",
};

export default packages;
