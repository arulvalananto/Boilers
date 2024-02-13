import spinner from "./spinners.js";
import packages from "../static/packages.js";
import { copyRecur, execute } from "./helpers.js";

class Languages {
  static async react(name, features) {
    const featureChecked = {};
    features.map((feature) => (featureChecked[feature] = true));

    const downloadScript = `npm create vite@latest ${
      name ? name : "new-project"
    } -- --template ${featureChecked.typescript ? "react-ts" : "react"}`;
    const installationScript = `cd ${name} && npm install`;
    const folderCreationScript = `cd ${name}/src && mkdir api components pages hooks hoc utils`;

    const downloadFailureCallback = () => {
      if (spinner.download.isSpinning)
        spinner.download.fail("📃 project files download failed");
    };

    const installationFailureCallback = () => () => {
      if (spinner.install.isSpinning)
        spinner.install.fail("📦 dependencies install failed");
    };

    const folderCreationFailureCallback = () => () => {
      if (spinner.folders.isSpinning)
        spinner.folders.fail("📂 folders creation failed");
    };

    spinner.download.start();
    execute(
      downloadScript,
      () => {
        spinner.download.succeed("📃 project files downloaded");
        spinner.install.start();
        execute(
          installationScript,
          () => {
            spinner.install.succeed("📦 dependencies installed");
            spinner.folders.start();
            execute(
              folderCreationScript,
              () => {
                spinner.folders.succeed("📂 folders created");
              },
              folderCreationFailureCallback
            );
          },
          installationFailureCallback
        );
      },
      downloadFailureCallback
    );
  }
}

export default Languages;
