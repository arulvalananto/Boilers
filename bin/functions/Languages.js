/* eslint-disable require-jsdoc */
import { copyRecur, execute, rename } from '../utils/helpers.js';
import spinner from '../utils/spinners.js';
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
                execute(`cd ${name} && npm i ${packages.react[feature]}`);

                if (feature === 'typescript')
                    copyRecur(
                        `${tempPath}/${hasRedux ? 'redux' : 'no-redux'}`,
                        currPath
                    );
                else copyRecur(tempPath, currPath);
            });
            spinner.features.succeed('ℹ️ features added');
        });
    }

    static node(name) {
        console.log('🚧 Under construction 🚧');
    }
}

export default Languages;
