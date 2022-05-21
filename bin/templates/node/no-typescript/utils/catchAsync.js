// It will catch all errors so you can handle them in a unified way

module.exports = catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
