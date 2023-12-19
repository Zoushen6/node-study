const zlib = require('node:zlib')
const fs = require('node:fs')
const http = require('node:http');

//压缩
// const readStream = fs.createReadStream('index.txt')
// const writeStream = fs.createWriteStream('index.txt.gz')
// //可读流进入pipe管道 先压缩  再进入写入流管道
// readStream.pipe(zlib.createGzip()).pipe(writeStream)

//解压
// const readStream = fs.createReadStream('index.txt.gz')
// const writeStream = fs.createWriteStream('index.txt2')
// readStream.pipe(zlib.createGunzip()).pipe(writeStream)   


// gzip 和 deflate 区别

// 压缩算法：Gzip 使用的是 Deflate 压缩算法，该算法结合了 LZ77 算法和哈夫曼编码。LZ77 算法用于数据的重复字符串的替换和引用，而哈夫曼编码用于进一步压缩数据。
// 压缩效率：Gzip 压缩通常具有更高的压缩率，因为它使用了哈夫曼编码来进一步压缩数据。哈夫曼编码根据字符的出现频率，将较常见的字符用较短的编码表示，从而减小数据的大小。
// 压缩速度：相比于仅使用 Deflate 的方式，Gzip 压缩需要更多的计算和处理时间，因为它还要进行哈夫曼编码的步骤。因此，在压缩速度方面，Deflate 可能比 Gzip 更快。
// 应用场景：Gzip 压缩常用于文件压缩、网络传输和 HTTP 响应的内容编码。它广泛应用于 Web 服务器和浏览器之间的数据传输，以减小文件大小和提高网络传输效率。


//http请求压缩
const server = http.createServer((req,res)=>{
    const txt = '小满zs'.repeat(1000);

    //res.setHeader('Content-Encoding','gzip')
    res.setHeader('Content-Encoding','deflate')
    res.setHeader('Content-type','text/plan;charset=utf-8')
   
    const result = zlib.deflateSync(txt);
    res.end(result)
})

server.listen(3000,() => {
    console.log('服务器启动成功');
})
