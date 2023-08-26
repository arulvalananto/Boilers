import ora from 'ora';

const spinner = (message, color) => {
    return ora({
        message,
        color,
    });
};

export default spinner;
