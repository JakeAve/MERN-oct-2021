const catchRouteError = (err, res) => {
  console.error(err);
  res.status(500).json({ message: 'Algo salió mal' });
};

module.exports = catchRouteError;
