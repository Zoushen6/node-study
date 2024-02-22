const express = require("express")

const app = express()
app.use('*',(req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500') //允许localhost 5500 访问
    next()
})

app.get('/sse',(req,res) => {
    res.setHeader('Content-Type','text/event-stream') //sse
    setInterval(() => {
        res.write('data: '+ Date.now() + '\n\n')
    },1000)
})

app.listen(3000,() => {
    console.log("http://localhost:3000");
})