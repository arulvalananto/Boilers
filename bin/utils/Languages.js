import path from "path";
import { fileURLToPath } from "url";
import spinner from "./spinners.js";
import packages from "../static/packages.js";
import constants from "../static/constants.js";
import { copyAndPasteData, execute } from "./helpers.js";

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

  static async _react_foldersSetup(projectName) {
    spinner.folders.start();
    const folderCreationScript = `cd ${projectName}/src && mkdir api components pages hooks hoc utils`;
    await execute(folderCreationScript);
    spinner.folders.succeed(constants.SPINNER.FOLDERS.SUCCEED);
  }

  static async _react_cleanupFiles(projectName, fileExtName) {
    spinner.cleanup.start();
    const templatePath = `../template/react`;
    const projectPath = `${process.cwd()}/${projectName}`;

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
      } 
        
    }

    spinner.features.succeed(constants.SPINNER.FEATURES.SUCCEED);
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
      await this._react_foldersSetup(projectName);
      await this._react_cleanupFiles(projectName, fileExtName);
      await this._react_features(
        projectName,
        features.filter((f) => f !== "typescript"),
        fileExtName
      );
    } catch (err) {
      this._react_errorCleanup(projectName, err);
    }
  }
}

export default Languages;
