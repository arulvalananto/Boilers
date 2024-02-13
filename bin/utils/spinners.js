import ora from "ora";

export const createSpinner = (text, color) =>
  ora({
    text,
    color,
  });

const spinner = {
  download: createSpinner("Downloading files", "yellow"),
  install: createSpinner("Installing dependencies", "yellow"),
  folders: createSpinner("Creating folders", "yellow"),
  features: createSpinner("Adding features", "yellow"),
};

export default spinner;
