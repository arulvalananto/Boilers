import fs from "fs";
import chalk from "chalk";
import fsExtra from "fs-extra";
import { exec } from "child_process";

export const execute = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const rename = (oldName, newName) => {
  fs.rename(oldName, newName, (err) => {
    if (err) return console.error("\n" + err.message);
  });
};

export const copyRecur = (oldPath, newPath) => {
  fsExtra.cpSync(oldPath, newPath, { recursive: true }, (err) => {
    if (err) return console.error(err.message);
  });
};

export const bold = (message, color = "yellow") => {
  return chalk[color].bold(message);
};

export const copyAndPasteData = (source, destination) => {
  fsExtra.copy(source, destination, (err) => {
    if (err) console.error(err.message);
    //else console.log("Content copied successfully!");
  });
};
