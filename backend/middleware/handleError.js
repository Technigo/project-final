export const errorHandler = (error, req, res, next) => {
  error.statusCode = error.statusCode || 400;
  error.message =
    error.message ||
    "Your params or query params are not acceptable. Go to the homepage and check what params are acceptable.";
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    success: false,
  });
};
