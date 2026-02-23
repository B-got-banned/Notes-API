const errorHandler = (err, req, res, next) => {
  console.error(err.message)
  console.error(err.stack || "")
  const status = err.status || 500
  res.status(status).json({ Error: err.message })
}

module.exports = errorHandler