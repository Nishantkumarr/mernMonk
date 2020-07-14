const express = require("express");
const app = express();
const mongoose = require("mongoose");



//Getting Routes 
const Users =require("./routes/api/Users");
const Profile =require("./routes/api/Profile");
const Post =require("./routes/api/Post");



//DB config 
const db =require('./config/keys').mongoURI;                                                                                    //getting value of mongoURi from the config keys file 
mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);




// connecting MONGO-DB
mongoose 
    .connect(db)                                                                                                            //runs the connection request
    .then(()=> console.log("MongoDB Connected"))                                                                           //runs if no error found
    .catch(err => console.log(err));                                                                                      //catches error and displays it 




//ROUTES
app.use('/api/users',Users)
app.use('/api/profile/',Profile)
app.use('/api/post',Post)





//just testing if server is running ot not 
app.get('/',(req,res)=> res.send("Hello world"));

const PORT = 5000;

app.listen(PORT,()=>console.log(`server is running at port ${PORT}`))