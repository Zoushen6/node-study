
const nodemailder = require('nodemailer')
const yaml = require('js-yaml')
const fs = require('node:fs')
const http = require('node:http')
const url = require('node:url')
const { log } = require('node:console')
//已停用授权码  需要的话去qq邮箱账号与安全申请
const mailConfig = yaml.load(fs.readFileSync('./mail.yaml', 'utf8'))
const transPort = nodemailder.createTransport({
    service: "qq",
    port: 587,
    host: 'smtp.qq.com',
    secure: true,
    auth: {
        pass: mailConfig.pass,
        user: mailConfig.user
    }
})


http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    if (req.method === 'POST' && pathname == '/send/mail') {
        let mailInfo = ''
        req.on('data', (chunk) => {
            mailInfo += chunk.toString()
        })
        req.on('end', () => {
            const body = JSON.parse(mailInfo)
            transPort.sendMail({
                from: '"走神" <1131717009@qq.com>',
                to: body.to,
                subject: body.subject,
                text: body.text
            })
            console.log('send success');
            res.end('ok')
        })
    }
}).listen(3000)

