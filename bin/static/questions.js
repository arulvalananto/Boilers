import chalk from "chalk";

const questions = {
  name: {
    type: "input",
    name: "name",
    message: chalk.blueBright("What is the name of the project?"),
    default: "new-project",
    validate: (input) => {
      if (input.trim().length > 0) return true;
      else return "Please enter a valid name.";
    },
  },
  languages: {
    type: "list",
    name: "language",
    message: chalk.blueBright("Which language template do you want to use?"),
    choices: ["react", "node"],
  },
  react: {
    features: {
      type: "checkbox",
      name: "features",
      message: chalk.blueBright(
        "Would you like to include any of the packages listed?"
      ),
      choices: [
        {
          name: "React Router",
          value: "react-router",
        },
        {
          name: "Redux",
          value: "redux",
        },
        {
          name: "Tailwind CSS",
          value: "tailwind",
        },
        {
          name: "TypeScript",
          value: "typescript",
        },
      ],
    },
    optionalFeatures: {
      type: "checkbox",
      name: "optionalFeatures",
      message: chalk.blueBright("Do you want these items included?"),
      choices: [
        {
          name: "Security Best Practices",
          value: "SBP",
          checked: true,
        },
        {
          name: "Advanced Error Handling Best Practices",
          value: "EHBP",
          checked: true,
        },
        {
          name: "The Open Graph Protocol",
          value: "OGP",
          checked: true,
        },
        {
          name: "CSS Best Practices",
          value: "CBP",
          checked: true,
        },
      ],
    },
  },
  node: {},
  confirm: {
    type: "confirm",
    name: "confirm",
    default: false,
    message: chalk.blueBright("Are you sure to continue?"),
  },
};

export default questions;
