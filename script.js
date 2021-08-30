const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const {findOne} = require("./modles/userSchema");
const User = require("./modles/userSchema");
const fetch = require("node-fetch");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const cors = require('cors')
var sessionstorage = require('sessionstorage');
var user="user"

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors({
  credentials: true
}))

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;
app.use(express.json());
const DB = process.env.DB;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

  app.use(express.urlencoded({ extended: false }));

  app.use(express.json());


const response={
  for_api_to_databas: "post req of /",
  for_getting_token:"get req of /token",
  for_authentication_of_cookie_token_data_display:"get req of /getData"
}



  app.post("/", (req,res)=>{
    fetch("https://api.publicapis.org/categories")
    .then(res=>res.json())
    .then((data)=>{

     let n= data.length

     const user = new User

     for(let i=0; i<n; ++i)
     {  user.data.push(data[i]);
     }
     user.save().then(()=>{
          res.json({yes: "user stored"})
        })
     

    })
        
  })


app.get('/token', (req,res)=>{
 let token = jwt.sign({_id:"22122131"},process.env.SECRET_KEY);
 // res.send(token);

let date_ob = new Date();
let seconds = date_ob.getSeconds();


 sessionstorage.setItem('key', JSON.stringify(token));
 sessionstorage.setItem('time',seconds)
 res.send({token})
})


app.get("/getData",(req,res)=>{
let date_ob = new Date();
let seconds = date_ob.getSeconds();


  if(sessionstorage.getItem('time')+300<=seconds && jwt.verify(sessionstorage.getItem('key'),process.env.SECRET_KEY)){
   sessionstorage.clear();
    res.send("get a token to continue by /token")
  }

  else

 { 
   User.find()
     .then(result=>{
       res.status(200).json({apilists:result})
     }).catch(err=>{console.log(err)
       res.status(500).json({error:"errror"})})
   }

})


  app.get("/",(req,res)=>{
    res.send(response
      )

  }).listen(PORT)
  
      
        


        
  