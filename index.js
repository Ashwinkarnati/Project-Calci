const express = require('express');

const fs = require('fs');
const connectMongoDb=require('./connection');
const logReqRes=require('./middleware');
const userRoute = require('./routes/user');
//Connection
connectMongoDb('mongodb://127.0.0.1:27017/project-1')
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.log("Mongo Error",err)); 

const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes('log.txt'));

const PORT = 3000;

//Routes

app.use("/api/users",userRoute);

app.listen(PORT, () => {
  console.log("Server Started at Port " + PORT);
});