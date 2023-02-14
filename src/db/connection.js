const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EMPDB').then(()=>{
    console.log("MongoDB Connection Successfully...");
}).catch((e)=>{
    console.log("MongoDB Conection Failed!!!");
})