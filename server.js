const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

// Server Connection
app.listen(PORT, () => console.log(`Server is connected on http://localhost:${PORT}`))
