const errorHandler = (error, _req, res, _next)=> {
  console.error(error)
  if(error.status) return res.status(error.status).json({ message: error.message});
  return res.status(500).json({ message: 'Internal Error'});
};

module.exports = errorHandler;