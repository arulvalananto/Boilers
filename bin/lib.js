import { copyRecur, execute, rename } from "./utils/helpers.js";
import spinner from "./static/spinners.js";
import packages from "./static/packages.js";

class Languages {
  static react(name, features) {
    spinner.install.start();
    execute(`npx create-react-app ${name}`);
    execute(`cd ${name}/src && mkdir api components pages utils`);
    spinner.install.succeed("📦 dependencies installed");

    spinner.features.start();
    features.map((feature) => {
      let command = `cd ${name} &&`;
      let tempPath = `../bin/templates/react/${feature}`;
      let currPath = `${process.cwd()}/${name}`;
      let srcPath = `${currPath}/src`;

      command +=
        feature === "tailwind"
          ? `npm i ${packages[feature][0]} && ${packages[feature][1]}`
          : ` npm i ${packages[feature]}`;
      execute(command);

      if (feature === "typescript") {
        rename(`${srcPath}/index.js`, `${srcPath}/index.tsx`);
        rename(`${srcPath}/App.js`, `${srcPath}/App.tsx`);

        const isRedux = features.includes("redux");
        copyRecur(`${tempPath}/${isRedux ? "redux" : "no-redux"}`, currPath);
      } else copyRecur(tempPath, currPath);
    });
    spinner.features.succeed("ℹ️ features added");
  }

  static node(name, features) {
    console.log("🚧 Under construction 🚧");
  }
}

export default Languages;
