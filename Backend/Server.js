const app = require('./src/app'); // Use quotes around the path
require('dotenv').config();

app.listen(3000, () => {
    console.log("server is running");
});