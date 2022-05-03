import ora from 'ora';

export const createSpinner = (text, color) =>
  ora({
    text,
    color,
  });

const spinner = {
  install: createSpinner('Installing dependencies', 'yellow'),
  features: createSpinner('Adding features', 'yellow'),
};

export default spinner;
