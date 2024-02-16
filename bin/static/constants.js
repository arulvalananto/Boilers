export default {
  SCRIPT_NAME: "scaffolder",
  CLI_USAGE:
    "$0 is a CLI tool that used to simplify the process of boilerplate code generation. \n\n To start using it, run `$0 init` or `$0 i`.",
  COMMANDS: {
    INIT: {
      COMMANDS: ["init", "i"],
      DESCRIPTION: "Initialize a new boilerplate project.",
    },
    LIST: {
      COMMANDS: ["list", "ls"],
      DESCRIPTION: "List all available boilerplate or template.",
    },
  },
  PACKAGES: {
    REACT: {
      REACT_ROUTER: "react-router-dom",
      REDUX: "--save @reduxjs/toolkit react-redux",
    },
  },
  MESSAGE: {
    INTRO: "/n/t 🤖 Welcome to Scaffolder CLI 🤖 /t/n",
    INITIAL_SETUP_DONE: "✔ Initial setup done",
    BYE: "Okay! See you later 🥺",
  },
  COLORS: {
    red: "red",
    green: "green",
    yellow: "yellow",
  },
  SPINNER: {
    INSTATION: {
      START: "Downloading files",
      SUCCEED: "📃 project files downloaded",
      FAIL: "project files download failed",
    },
    INSTALL: {
      START: "Installing dependencies",
      SUCCEED: "📦 dependencies installed",
      FAIL: "dependencies install failed",
    },
    FOLDERS: {
      START: "Creating folders",
      SUCCEED: "📂 folders created",
      FAIL: "folders creation failed",
    },
    CLEANUP: {
      START: "Cleaning up",
      SUCCEED: "🧹 cleanup done",
      FAIL: "cleanup failed",
    },
    FEATURES: {
      START: "Adding features",
      SUCCEED: "🧩 features added",
      FAIL: "features addition failed",
    },
    PRETTIER: {
      START: "Prettifying",
      SUCCEED: "🎨 prettified",
      FAIL: "prettify failed",
    },
  },
};
