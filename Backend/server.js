require('dotenv').config();//i required my gemini key here 

const app = require('./src/app'); //i required my app from app.js

app.listen(3000,() =>{
    console.log("server is running on localhost 3000")//i will run on localhost:3000
})