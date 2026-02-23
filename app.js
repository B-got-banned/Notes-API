require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const reqLogger = require('./middleware/reqLogger')
const connectDb = require('./databases/connectDb')
const errorHandler = require('./middleware/errorHandler')
const routes = require('./routes/noteRoutes')
const PORT = process.env.PORT || 5020

connectDb()

app.use(express.json())
app.use(cors('*'))
app.use(reqLogger)

app.use('/api/notes', routes)

app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})