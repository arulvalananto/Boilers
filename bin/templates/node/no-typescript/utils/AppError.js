module.exports = class AppError extends Error {
  // eslint-disable-next-line require-jsdoc
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode < 500 ? 'error' : 'fail';

    Error.captureStackTrace(this, this.constructor);
  }
};
