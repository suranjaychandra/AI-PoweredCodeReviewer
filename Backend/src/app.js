const express = require("express")//i required express here

const aiRoutes = require("./routes/ai.routes");

const app = express(); // store in variable "app"

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hello world");// sending for server.js
})

app.use("/ai",aiRoutes);

module.exports = app;//exporting app