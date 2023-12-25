const express = require("express")
const User = require("./src/user")
const loggerMiddleware = require('./middleware/logger');
const staticMethod = require('./src/static')
const app = express()

app.use(express.json()) //如果前端使用的是post并且传递json 需要注册此中间件 不然是undefined
app.use(loggerMiddleware)

const whiteList = ['localhost']
//防盗链
const preventHotLink = (req,res,next) => {
    //获取请求头的referer  referer如果是直接打开的资源（图片）是获取不到的 必须发起请求 
    //请求到index.html后 在index.html中请求的图片会有referer  referer为http://localhost:3000/index.html
    const referer = req.get('referer')
    if(referer) {
        const {hostname} = new URL(referer)
        if(!whiteList.includes(hostname)) {
            //使用http://127.0.0.1:3000/index.html 访问
            res.status(403).send('禁止访问')
            return
        }
    }
    console.log('referer',referer);
    next()
}

app.use(preventHotLink)


//手写方法
// app.use('/static',staticMethod)
//express 提供的方法  此方法请求时不需要加static  http://localhost:3000/point.png
app.use(express.static('static'))
// app.use('assets',express.static('static'))

app.use('/user',User)

app.get('/', (req, res) => {
    console.log(req.query) //get 用query
    res.send('get')
})

app.post('/create', (req, res) => {
    console.log(req.body) //post用body
    res.send('post')
})

//如果是动态参数用 params
app.get('/:id', (req, res) => {
    console.log(req.params)
    res.send('get id'+ req.params.id)
})


app.listen(3000,() => {
    console.log("http://localhost:3000");
})