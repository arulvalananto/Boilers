import { copyRecur, execute } from './helpers.js';
import spinner from './spinners.js';
import packages from '../static/packages.js';

class Languages {
    static async react(name, features) {
        spinner.install.start();
        execute(`npx create-react-app ${name}`, () => {
            execute(`cd ${name}/src && mkdir api components pages utils`);
            spinner.install.succeed('📦 dependencies installed');

            spinner.features.start();
            features.map((feature) => {
                const tempPath = `../bin/templates/react/${feature}`;
                const currPath = `${process.cwd()}/${name}`;
                const hasRedux = features.includes('redux');

                if (feature == 'contextAPI' && hasRedux) return;
                execute(`cd ${name} && npm i ${packages.react[feature]}`, () =>
                    copyRecur(tempPath, currPath)
                );
            });
            spinner.features.succeed('ℹ️ features added');
        });
    }
}

export default Languages;
