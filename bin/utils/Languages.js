import path from "path";
import { fileURLToPath } from "url";
import spinner from "./spinners.js";
import constants from "../static/constants.js";
import { copyAndPasteData, execute } from "./helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Languages {
  static async _join(pathName) {
    return path.join(__dirname, pathName);
  }

  static async react(name, features) {
    const featureChecked = {};
    features.map((feature) => (featureChecked[feature] = true));

    const projectName = name ? name : "new-project";
    const templateName = featureChecked.typescript ? "react-ts" : "react";
    const instationScript = `npm create vite@latest ${projectName}  -- --template ${templateName}`;
    const installationScript = `cd ${projectName} && npm install`;
    const folderCreationScript = `cd ${projectName}/src && mkdir api components pages hooks hoc utils`;

    try {
      spinner.instation.start();
      await execute(instationScript);
      spinner.instation.succeed(constants.SPINNER.INSTATION.SUCCEED);
      spinner.install.start();
      await execute(installationScript);
      spinner.install.succeed(constants.SPINNER.INSTALL.SUCCEED);
      spinner.folders.start();
      await execute(folderCreationScript);
      spinner.folders.succeed(constants.SPINNER.FOLDERS.SUCCEED);

      // cleanup files
      spinner.cleanup.start();
      const templatePath = `../template/react`;
      const projectPath = `${process.cwd()}/${projectName}`;
      const fileExtName = featureChecked.typescript ? "t" : "j";

      const appFileSource = await this._join(
        `${templatePath}/App.${fileExtName}sx`
      );
      const appFileDestination = `${projectPath}/src/App.${fileExtName}sx`;
      copyAndPasteData(appFileSource, appFileDestination);

      const appStyleFileSource = await this._join(`${templatePath}/App.css`);
      const appStyleFileDestination = `${projectPath}/src/App.css`;
      copyAndPasteData(appStyleFileSource, appStyleFileDestination);

      const indexStyleFileSource = await this._join(
        `${templatePath}/index.css`
      );
      const indexStyleFileDestination = `${projectPath}/src/index.css`;
      copyAndPasteData(indexStyleFileSource, indexStyleFileDestination);

      const indexFileSource = await this._join(
        `${templatePath}/index-${fileExtName}sx.html`
      );
      const indexFileDestination = `${projectPath}/index.html`;
      copyAndPasteData(indexFileSource, indexFileDestination);
      spinner.cleanup.succeed(constants.SPINNER.CLEANUP.SUCCEED);

      // add features
    } catch (err) {
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

      execute(`rm -rf ${projectName}`, (err) => {
        if (err) return console.error(err.message);
        console.log("Project deleted successfully!");
      });
    }
  }
}

export default Languages;
