import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import spinner from "./spinners.js";
import packages from "../static/packages.js";
import constants from "../static/constants.js";
import { bold, copyAndPasteData, execute } from "./helpers.js";

const { COLORS } = constants;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Languages {
  static async _join(pathName) {
    return path.join(__dirname, pathName);
  }

  static async _react_instation(projectName, featureChecked) {
    spinner.instation.start();
    const templateName = featureChecked.typescript ? "react-ts" : "react";
    const instationScript = `npm create vite@latest ${projectName}  -- --template ${templateName}`;
    await execute(instationScript);
    spinner.instation.succeed(constants.SPINNER.INSTATION.SUCCEED);
  }

  static async _react_installation(projectName) {
    spinner.install.start();
    const installationScript = `cd ${projectName} && npm install`;
    await execute(installationScript);
    spinner.install.succeed(constants.SPINNER.INSTALL.SUCCEED);
  }

  static async _react_foldersSetup(projectName, featureChecked) {
    spinner.folders.start();
    const folderCreationScript = `cd ${projectName}/src && mkdir api components pages hooks hoc utils ${
      featureChecked.redux ? "store" : ""
    }`;
    await execute(folderCreationScript);
    spinner.folders.succeed(constants.SPINNER.FOLDERS.SUCCEED);
  }

  static async _react_cleanupFiles(projectName, fileExtName) {
    spinner.cleanup.start();
    const templatePath = `../template/react`;
    const projectPath = `${process.cwd()}/${projectName}`;
    const isTypescript = fileExtName === "t";

    const appFileSource = await this._join(
      `${templatePath}/App.${fileExtName}sx`
    );
    const appFileDestination = `${projectPath}/src/App.${fileExtName}sx`;
    copyAndPasteData(appFileSource, appFileDestination);

    const appStyleFileSource = await this._join(`${templatePath}/App.css`);
    const appStyleFileDestination = `${projectPath}/src/App.css`;
    copyAndPasteData(appStyleFileSource, appStyleFileDestination);

    const indexStyleFileSource = await this._join(`${templatePath}/index.css`);
    const indexStyleFileDestination = `${projectPath}/src/index.css`;
    copyAndPasteData(indexStyleFileSource, indexStyleFileDestination);

    const indexFileSource = await this._join(
      `${templatePath}/index-${fileExtName}sx.html`
    );
    const indexFileDestination = `${projectPath}/index.html`;
    copyAndPasteData(indexFileSource, indexFileDestination);

    const hocSource = await this._join(
      `${templatePath}/hoc${isTypescript ? "-ts" : ""}/`
    );
    const hocDestination = `${projectPath}/src/hoc/`;
    copyAndPasteData(hocSource, hocDestination);

    const pageSource = await this._join(
      `${templatePath}/pages${isTypescript ? "-ts" : ""}/`
    );
    const pageDestination = `${projectPath}/src/pages/`;
    copyAndPasteData(pageSource, pageDestination);

    const publicSource = await this._join(`${templatePath}/public/`);
    const publicDestination = `${projectPath}/public/`;
    copyAndPasteData(publicSource, publicDestination);

    const readMeSource = await this._join(`${templatePath}/README.md`);
    const readMeDestination = `${projectPath}/README.md`;
    copyAndPasteData(readMeSource, readMeDestination);

    const envSource = await this._join(`${templatePath}/.env`);
    const envDestination = `${projectPath}/.env`;
    copyAndPasteData(envSource, envDestination);

    spinner.cleanup.succeed(constants.SPINNER.CLEANUP.SUCCEED);
  }

  static async _react_features(projectName, features, fileExtName) {
    spinner.features.start();

    for (let feature of features) {
      if (!packages.react[feature]) return;
      spinner.features.text = `Installing ${feature}...`;

      await execute(
        `cd ${projectName} && npm install ${packages.react[feature]}`
      );

      let source = "";
      let destination = "";
      const templatePath = `../template/react`;
      const projectPath = `${process.cwd()}/${projectName}`;
      if (feature === "react-router") {
        source = await this._join(
          `${templatePath}/App-router.${fileExtName}sx`
        );
        destination = `${projectPath}/src/App.${fileExtName}sx`;
        copyAndPasteData(source, destination);
      } else if (feature === "tailwind") {
        source = await this._join(`${templatePath}/tailwind.config.js`);
        destination = `${projectPath}/tailwind.config.js`;
        copyAndPasteData(source, destination);

        source = await this._join(`${templatePath}/index-tailwind.css`);
        destination = `${projectPath}/src/index.css`;
        copyAndPasteData(source, destination);
      } else if (feature === "redux") {
        if (fileExtName === "t") {
          source = await this._join(`${templatePath}/store-ts/`);
          destination = `${projectPath}/src/store/`;
          copyAndPasteData(source, destination);
        } else {
          source = await this._join(`${templatePath}/store/`);
          destination = `${projectPath}/src/store/`;
          copyAndPasteData(source, destination);
        }
        source = await this._join(
          `${templatePath}/main-redux.${fileExtName}sx`
        );
        destination = `${projectPath}/src/main.${fileExtName}sx`;
        copyAndPasteData(source, destination);
      }
    }

    spinner.features.succeed(constants.SPINNER.FEATURES.SUCCEED);
  }

  static async _react_prettify(projectName) {
    spinner.prettier.start();
    await execute(`cd ${projectName} && npm install -D prettier`);

    const prettierConfig = await this._join(`../template/react/.prettierrc`);
    const projectPath = `${process.cwd()}/${projectName}/.prettierrc`;
    copyAndPasteData(prettierConfig, projectPath);

    const prettierIgnore = await this._join(
      `../template/react/.prettierignore`
    );
    const projectIgnorePath = `${process.cwd()}/${projectName}/.prettierignore`;
    copyAndPasteData(prettierIgnore, projectIgnorePath);

    const vscodeSettings = await this._join(`../template/react/.vscode/`);
    const projectVscodeSettings = `${process.cwd()}/${projectName}/.vscode/`;
    copyAndPasteData(vscodeSettings, projectVscodeSettings);

    const packageJsonPath = `${projectName}/package.json`;
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.scripts = {
      dev: "vite",
      build: "tsc && vite build",
      lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      preview: "vite preview",
      "lint:fix": "npm run lint -- --fix",
      prettier: "npx prettier src --check",
      "prettier:fix": "npm run prettier -- --write",
      "pre-commit": "npm run lint && npm run prettier",
      "pre-commit:fix": "npm run prettier:fix && npm run lint:fix",
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    spinner.prettier.succeed(constants.SPINNER.PRETTIER.SUCCEED);
  }

  static async _react_errorCleanup(projectName, err) {
    console.error(err);
    if (spinner.instation.isSpinning) {
      spinner.instation.fail(constants.SPINNER.INSTATION.FAIL);
    }
    if (spinner.install.isSpinning) {
      spinner.install.fail(constants.SPINNER.INSTALL.FAIL);
    }
    if (spinner.folders.isSpinning) {
      spinner.folders.fail(constants.SPINNER.FOLDERS.FAIL);
    }
    if (spinner.cleanup.isSpinning) {
      spinner.cleanup.fail(constants.SPINNER.CLEANUP.FAIL);
    }
    if (spinner.features.isSpinning) {
      spinner.features.fail(constants.SPINNER.FEATURES.FAIL);
    }
    if (spinner.prettier.isSpinning) {
      spinner.prettier.fail(constants.SPINNER.PRETTIER.FAIL);
    }

    execute(`rm -rf ${projectName}`, (err) => {
      if (err) return console.error(err.message);
      console.log("Project deleted successfully!");
    });
  }

  static async react(name, features) {
    const featureChecked = {};
    const projectName = name ? name : "new-project";
    features.map((feature) => (featureChecked[feature] = true));

    const fileExtName = featureChecked.typescript ? "t" : "j";

    try {
      await this._react_instation(projectName, featureChecked);
      await this._react_installation(projectName);
      await this._react_foldersSetup(projectName, featureChecked);
      await this._react_cleanupFiles(projectName, fileExtName);
      await this._react_features(
        projectName,
        features.filter((f) => f !== "typescript"),
        fileExtName
      );
      await this._react_prettify(projectName);

      console.log(
        `\n🎉 Ready to go 🎉\n\nTo get started:\n\n  ${bold(
          `cd ${projectName}`,
          COLORS.yellow
        )}\n  ${bold("npm run dev", COLORS.green)}`
      );
    } catch (err) {
      this._react_errorCleanup(projectName, err);
    }
  }
}

export default Languages;
