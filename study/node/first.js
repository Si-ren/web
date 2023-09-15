var fs = require('fs');
var path = require('path');

fs.readFile('/path', 'utf8', function (err, dataStr) {
    if (err) {
        // console.error(err);
        // return console.log('读取文件失败: ' + err.message);
        console.log('读取文件失败: ' + err.message);

    }
    console.log('读取文件成功: ' + dataStr);
});

fs.writeFile('/path', 'utf8', function (err) {

    if (err) {
        console.error(err);
        // return
    }
    console.log('文件写入成功！');
    console.log(__dirname);
})

// 为什么这里的不执行？ 因为node是异步的，其实是执行了的。输出在第一行
console.log(__dirname + '111111');

// 使用path.join，可以使路径拼接在一起，如果使用'+'的方式,那就会变为  C:/xxx/xx/./files/1.txt
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.error(err);
    }
    console.log(dataStr);
})

// path.extname(path)  返回文件的拓展名部分
// path.basename(path, ".txt");  返回文件名,可以不带拓展部份