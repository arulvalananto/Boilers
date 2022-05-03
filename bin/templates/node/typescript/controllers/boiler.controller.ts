const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.fetchSampleData = catchAsync(async (req, res, next) => {
  // Do not need to use try/catch or promises here
  // because it is already handled by the catchAsync function

  if (req.params.id === "1")
    return next(new AppError("This is a sample error", 400));

  res.status(200).json({ sample: "hello world" });
});
