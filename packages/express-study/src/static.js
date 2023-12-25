const fs = require('node:fs')
const path = require('node:path')
// const mime = require('mime')

const staticMethod = (req,res,next) => {
    const {method,url} = req
    // console.log('static'+ req.method,req.url);
    if(method === 'GET') {
        const staticPath = path.join(process.cwd(),'/static' + url)
        // const staticPath = 'D:/front/node-study/static' + url
        console.log(staticPath);
        fs.readFile(staticPath,(err,data) => {
            if(err) {
                res.writeHead(404, {
                    'content-type': 'text/plain'
                })
                res.end('not found')
            }else {
                // const type = mime.getType(staticPath)
                res.writeHead(200, {
                    'content-type': 'image/png'
                })
                res.end(data)
            }
            next()
        })
    }
}

module.exports = staticMethod