const response = (statusCode, message, data, res) => {
  res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    data: data,
    pagination: {
      prev: "",
      next: "",
      max: "",
    },
  });
};

export default response;
