const catchRouteError = (err, res) => {
  console.error(JSON.stringify(err));
  if (err.errors) return res.status(400).json(err.errors);
  res.status(500).json({ message: 'Algo salió mal' });
};

module.exports = catchRouteError;
