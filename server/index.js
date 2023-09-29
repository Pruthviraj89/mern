const mongoose= require('mongoose');
const express= require('express');
const cors = require("cors");
const app= express();

app.use(express.json());


const DB='mongodb://localhost:27017';

mongoose.connect(DB,{dbName:'registerdb'}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>{console.log(`no connection `,err)});


// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    }
    
});
const User = mongoose.model('data',UserSchema);
User.createIndexes();


app.use(cors());


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
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
        
    }
});

app.listen(8400,()=>{
    console.log('server is runnning at 8400');
})