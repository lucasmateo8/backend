// modulo http

/* import http from 'htpp'

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.end('primer sv')
})

server.listen(8080,()=>{
   console.log("escuchando"); 
})
 */

import express from "express";

const app = express()

app.listen(8080,()=>{
    console.log('escuchando');
})