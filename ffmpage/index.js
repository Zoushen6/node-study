// https://link.juejin.cn/?target=http%3A%2F%2Fffmpeg.p2hp.com%2Fdownload.html
// 下载安装  配置环境变量
/**
 * //由于是b站爬的  音频和视频是分开的  所以进行合并
 * ffmpeg -i video.mp4 -vcodec copy audioLess.mp4   ps： 可能由于编码格式问题，在文件夹中用默认播放器只能播放无音频的视频。并且只有加了水印的视频才有封面，可以参考阮一峰ffmpeg教程最后的添加封面
 * ffmpeg -i audioLess.mp4 -i audio.mp3 -c copy output.mp4
 * ffplay output.mp4 查看视频  
 *  */ 
const { execSync,exec } = require('child_process');
// execSync('ffmpeg -i video.mp4 video.gif',{stdio: 'inherit'});
// execSync('ffmpeg -i output.mp4 -vf drawtext=text="zszszs":fontsize=100:x=200:y=200:fontcolor=white water1.mp4',{stdio: 'inherit'});

// execSync('ffmpeg -i output.mp4 -vn 111.mp4',{stdio: 'inherit'});



execSync('ffprobe -show_frames water.mp4');