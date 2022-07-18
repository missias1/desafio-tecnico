const errorHandler = (error, _req, res, _next)=> {
  if(error.status) return res.status(error.status).json({ message: error.message})
  console.error(error)
  res.status(500).json(error);
};

module.exports = errorHandler;