const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config();

app.get('/',(req,res)=>{
    res.send('Hey bitcha!!!!!')
});

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-mk5r9.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(()=> console.log("MongoDB Connected."))
    .catch( err =>{
        console.log(err);
    });

app.listen(port,()=>{
    console.log(`Successful connect to port ${port}.`);
})

