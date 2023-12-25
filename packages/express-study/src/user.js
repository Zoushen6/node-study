const express = require("express")

const router = express.Router()

router.post('/login',(req,res) => {
    res.json({
        code: 200,
        msg: '登录成功'
    })
})

router.post('/register',(req,res) => {
    res.json({
        code: 200,
        msg: '注册成功'
    })
})

module.exports = router