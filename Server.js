// const express= require('express')
// const app=express()
// const bodyParser=require('body-parser')
// const cors=require('cors')
// const path=require('path')
// const db=require('./DB')
// const PORT=80;
// // const router=require('Routes')
// const router=express.Router()


// // Database connection

// db.connect();


// // Middle ware
// app.use(bodyParser.json({limit:'50mb'}))
// app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}))

// // Cors origin issues
// app.use((req,res,next)=>{
//     req.header('Access-Control-Allow-Origin', '*')
//     req.header('Access-Control-Allow-Headers', '*');
//     next()


// })

// // Routes
// app.use('/api', router)



// // backend can use public files

// app.use('/uploads', express.static(path.join(__dirname,"/../uploads")))
// app.use(express.static(path.join(__dirname,"/../quora_mern_clone/build")))


// app.get('*',(req,res)=>{
//     try {
//         res.sendFile(path.join(`${__dirname}/../quora_mern_clone/build/index.html`))
        
//     } catch (error) {
  
//         res.send('Oops! unexpected error')
//     }
// })

// app.use(cors())


// // Server listening

// app.listen(process.env.PORT || PORT, ()=>{
//     console.log( `Listenung on port no ${PORT}`)
// })

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 80;
const db = require("./db");
const router = require("./routes");

//database connection

db.connect();

//middle ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

//routes

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../quora_mern_clone/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../quora_mern_clone/build/index.html`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

app.use(cors());

//server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port no ${PORT}`);
});
