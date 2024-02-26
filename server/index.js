const express = require('express')
const database = require('./config/database')
const cookieParser = require('cookie-parser')
const Message = require('./models/Conversation')
const authRoutes = require('./routes/AuthRoutes')
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000
database.dbconnect()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})
app.use("/api",authRoutes)