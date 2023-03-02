//todo - declare variables
const express = require("express")
const app = express()
const PORT = 8000 
const mongoose = require("mongoose")


//import functions/routes
const connectDB = require("./config/database")
require('dotenv').config({path: './config/.env'})
const homeRoutes = require('./routes/home')

//todo - connect to database
connectDB()

//todo - set middleware
app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

//todo - set routes
app.use('/', homeRoutes)

//todo - start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))