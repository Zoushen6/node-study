const os = require('node:os')
const { exec } = require('child_process');
// console.log(os.platform());
// console.log(os.release());
// console.log(os.type());
// console.log(os.version());

function openBrowser(url) {
    if (os.platform() === 'darwin') {  // macOS
      exec(`open ${url}`); //执行shell脚本
    } else if (os.platform() === 'win32') {  // Windows
      exec(`start ${url}`); //执行shell脚本
    } else {  // Linux, Unix-like
      exec(`xdg-open ${url}`); //执行shell脚本
    }
  }
  
  // Example usage
//   openBrowser('https://www.juejin.cn');  //open:true 原理

// console.log(os.homedir());
console.log(os.cpus().length);