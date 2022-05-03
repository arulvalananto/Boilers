import { execSync } from 'child_process';
import fs from 'fs';

export const execute = (command) => {
    execSync(command, (err) => {
        if (err) return console.error('\n' + err.message);
        process.exit(1);
    });
};

export const rename = (oldName, newName) => {
    fs.rename(oldName, newName, (err) => {
        if (err) return console.error('\n' + err.message);
        process.exit(1);
    });
};

export const copyRecur = (oldPath, newPath) => {
    fs.cpSync(oldPath, newPath, { recursive: true }, (err) => {
        if (err) return console.error(err.message);
    });
};
