const ws = require("nodejs-websocket")
const server = ws.createServer(connect => {
    // 每当接收到用户传递过来的数据，就会触发text事件，并传入数据
    connect.on("text", data => {
        // 给用户响应数据
        // connect.sendText(data.toUpperCase()+"!!!") //转换大小写并并拼接字符串
        connect.send(data)
    })

    //监听websocket断开链接
    connect.on("close", () => {
        console.log("websocket连接断开....")
    })

    //监听websocket异常信息
    connect.on("error", () => {
        console.log("websocket连接异常....")
    })
})
server.listen(3000, () => {
    console.log("websocket running")
})
