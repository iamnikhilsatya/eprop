require('dotenv').config()
const AWSSecretKey=process.env.AWS_SECRET_KEY
const AWSAccessKey=process.env.AWS_ACCESS_KEY
const User = require('./models/user');
const mongoose = require('mongoose')

const express = require('express')

const app=express()

const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')

const cors = require('cors')
var multer  = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

const authRoutes = require('./routes/auth')

const userRoutes = require('./routes/user')

aws.config.update({
    secretAccessKey: AWSSecretKey,
    accessKeyId: AWSAccessKey,
    region: 'ap-south-1'
});

s3 = new aws.S3();
  var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'propssol',
        key: function (req, file, cb) {
            // var newFileName = Date.now() + "-" + file.originalname
            console.log(file);
            cb(null,'foo-folder/' + Date.now() + '_' +  file.originalname); //use Date.now() for unique file keys
        }
    })
});


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

app.post("/upload", upload.array("imgCollection",6),(req,res)=>{
    const reqFiles = [];
   User.findOneAndUpdate({_id:req.body.userId},{
       $push:{
           images:req.formData
       }
   },
   (err)=>{
       if(err){
           console.log(err)
       }
       else{
           console.log("user updated")
       }
   })

})


app.listen(port,()=>{
     
    console.log(`app is running at ${port}`)

})
