import ora from "ora";
import constants from "../static/constants.js";

export const createSpinner = (text, color) =>
  ora({
    text,
    color,
  });

const spinner = {
  instation: createSpinner(constants.SPINNER.INSTATION.START, "yellow"),
  install: createSpinner(constants.SPINNER.INSTALL.START, "yellow"),
  folders: createSpinner(constants.SPINNER.FOLDERS.START, "yellow"),
  features: createSpinner(constants.SPINNER.FEATURES.START, "yellow"),
};

export default spinner;
