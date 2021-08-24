require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./app/router');
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
  optionsSuccessStatus: 200,
  credentials: true,
  origin: true,
  methods: "GET, PUT, PATCH, POST, DELETE",
  allowedHeaders : ['Content-Type', 'Authorization'],
})); 
  
app.use(express.json());
app.use(express.urlencoded({extended: true}));  

app.use(router);

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});  