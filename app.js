const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const config = require('./config/key');
const dotenv = require('dotenv');
dotenv.config();

const {User} = require('./models/user');

mongoose
    .connect(config.mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(()=> console.log("MongoDB Connected."))
    .catch( err =>{
        console.log(err);
    });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body)

    user.save((err,userData)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })
});

app.listen(port,()=>{
    console.log(`Successful connect to port ${port}.`);
})

