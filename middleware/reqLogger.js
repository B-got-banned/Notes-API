const timestamp = new Date().toISOString()

const reqLogger = (req, res, next) => {
  console.log(`${req.method} request to ${req.url} from ${req.ip} on ${timestamp}`)
  next()
}

module.exports = reqLogger