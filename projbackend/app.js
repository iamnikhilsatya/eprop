require('dotenv').config()

const mongoose = require('mongoose')

const express = require('express')

const app=express()

const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')

const cors = require('cors')


const authRoutes = require('./routes/auth')

const userRoutes = require('./routes/user')

const photoRoutes = require('./routes/photo')


const port = process.env.PORT|| 8000

//DB connection 
let connnection= mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true

}).then(()=>{
    console.log('DB CONNECTED')
})

connnection;




app.use(bodyParser.json())



app.use(cookieParser())

app.use(cors())

app.use("/api",authRoutes)

app.use("/api",userRoutes)

app.use("/api",photoRoutes)


app.listen(port,()=>{
     
    console.log(`app is running at ${port}`)

})