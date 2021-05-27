const express = require("express");
const mongoose = require("mongoose");

//user router
const userRoutes = require("./routes/user");

const app = express();




app.use(express.json());
require('dotenv').config();
const port = process.env.PORT;
const root=process.env.MONGO_DB_USER;
const password=process.env.MONGO_DB_PASSWORD;
const database=process.env.MONGO_DB_DATABASE;

//mongodb+srv://root:<password>@cluster0.8lkfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
  `mongodb+srv://root:${process.env.MONGO_DB_PASSWORD}@cluster0.8lkfp.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  }
).then(()=>{
    console.log("connected")
});

app.use('/api',userRoutes)
app.listen(port,()=> {
  console.log(`listening on port ${port}`);
});
