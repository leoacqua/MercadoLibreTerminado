//console.log ('hola');

const express = require ('express');

const app = express();

const path = require('path');

// const publicPath = path.resolve (__dirname,'./public');
// app.use (express.static(publicPath));

app.use (express.static('public'))

app.listen(3033,()=> 
console.log("Servidor corriendo en http://localhost:3033")
);

app.get('/',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/home.html'))
 });

 app.get('/register',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/register.html'))
 });

 app.get('/login',(req,res)=>{
   res.sendFile (path.resolve (__dirname, './views/login.html'))
});