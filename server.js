const express = require("express");
const app = express();
const mongoose = require("mongoose");



//DB config 
const db =require('./config/keys').mongoURI;                //getting value of mongoURi from the config keys file 
mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// connecting MONGO-DB
mongoose 
    .connect(db)                                          //runs the connection request
    .then(()=> console.log("MongoDB Connected"))        //runs if no error found
    .catch(err => console.log(err));                    //catches error and displays it 




app.get('/',(req,res)=> res.send("Hello world"));

const PORT = 5000;

app.listen(PORT,()=>console.log(`server is running at port ${PORT}`))