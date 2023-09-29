// -dotenv is used to secure the password , database url which is in file config.env
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const mongoose= require('mongoose');
const express= require('express');
const cors = require("cors");

const app= express();
app.use(cors());
app.use(express.json());

require('./db/conn');

const PORT=process.env.PORT;











// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: String,
    email:  String,
    
});
const User = mongoose.model('data',UserSchema);
User.createIndexes();





app.get('/',(req,res)=>{

    res.send(`Hello world from the server`);
});

app.post("/register", async (req, resp) => {
    
    
    try {
        console.log(req.body);
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send('zlalasfa');
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
        
    }
});



app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`);
})