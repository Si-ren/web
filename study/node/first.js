var fs = require('fs');

fs.readFile('/path', function (err, file) {
    console.log('读取文件完成')
});
console.log('发起读取文件');