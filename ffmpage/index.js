// https://link.juejin.cn/?target=http%3A%2F%2Fffmpeg.p2hp.com%2Fdownload.html
// 下载安装  配置环境变量
/**
 * //由于是b站爬的  音频和视频是分开的  所以进行合并
 * ffmpeg -i video.mp4 -vcodec copy audioLess.mp4
 * ffmpeg -i audioLess.mp4 -i audio.mp3 -c copy output.mp4
 * ffplay output.mp4 查看视频
 *  */ 
const { execSync,exec } = require('child_process');
// execSync('ffmpeg -i video.mp4 video.gif',{stdio: 'inherit'});
execSync('ffmpeg -i output.mp4 -vf drawtext=text="zszszs":fontsize=100:x=200:y=200:fontcolor=white water.mp4',{stdio: 'inherit'});