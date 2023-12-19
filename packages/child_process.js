const {exec,execSync,spawn,spawnSync,execFile,execFileSync} = require('child_process')
const path = require('node:path')
//  命令      参数  options配置
const {stdout} = spawn('netstat')

//返回的数据用data事件接受
// stdout.on('data',(steram)=>{
//     console.log(steram.toString())
// })

execFile(path.resolve(process.cwd(),'./bat.cmd'),null,{ encoding: 'utf8' },(err,stdout)=>{
    console.log(stdout.toString())
})