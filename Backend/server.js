require('dotenv').config();//i required my gemini key here 
// import { path } from './src/app';
const app = require('./src/app'); //i required my app from app.js

// const _dirname = path.resolve();

// app.use(express.static(path.join(_dirname,"/Frontend/dist")));
// app.get("*",(_, res)=>{
//     res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"));
// })
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
