import fs from "fs";
import fsExtra from "fs-extra";
import { exec } from "child_process";
import chalk from "chalk";

export const execute = (
  command,
  callback = () => {},
  spinnerFailMessage = () => {}
) => {
  exec(command, (err) => {
    if (err) {
      console.error("\n" + err.message);
      spinnerFailMessage();
      return;
    }
    callback();
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
