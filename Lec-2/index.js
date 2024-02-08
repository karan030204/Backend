const express = require('express')
const app = express();
//Just like Math.random Math.sqrt etc
const port = 4000 // Total 65535 port hote h
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/twitter', (req,res)=>{
    res.send('dattanikaran25')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please Login Bhai</h1>')
})

//We need to restart the server after making any changes in the code

app.get('/youtube' , (req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${port}`);
})
