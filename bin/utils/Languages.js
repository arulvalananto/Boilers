import spinner from "./spinners.js";
import { execute } from "./helpers.js";
import constants from "../static/constants.js";

class Languages {
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
    } catch (err) {
      console.error(err);
      if (spinner.instation.isSpinning) {
        spinner.instation.fail(constants.SPINNER.INSTATION.FAIL);
      }
      if (spinner.install.isSpinning) {
        spinner.install.fail(constants.SPINNER.INSTALL.FAIL);
      }
      if (spinner.folders.isSpinning) {
        spinner.folders.fail(constants.SPINNER.FOLDERS.START);
      }
    }
  }
}

export default Languages;
