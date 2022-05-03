import { exec } from 'child_process';
import fs from 'fs';

export const execute = (command, callback = () => {}) => {
    exec(command, (err) => {
        if (err) return console.error('\n' + err.message);
        callback();
    });
};

export const rename = (oldName, newName) => {
    fs.rename(oldName, newName, (err) => {
        if (err) return console.error('\n' + err.message);
    });
};

export const copyRecur = (oldPath, newPath) => {
    fs.cpSync(oldPath, newPath, { recursive: true }, (err) => {
        if (err) return console.error(err.message);
    });
};
