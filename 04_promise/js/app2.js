// 先使用 npm install -g express 安装全局express
// express 4.x版本中将命令工具分出来,安装一个命令工具:  npm install -g express-generator
var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/getdata', function(req, res) {
    // res.send({id:req.params.id, name: req.params.password});
    res.send('hello');
});
app.get('/getdata2', function(req, res) {
    // res.send({id:req.params.id, name: req.params.password});
    setTimeout(function(){
        res.send('hello2');
    },1000)
});
app.get('/getdata3', function(req, res) {
    // res.send({id:req.params.id, name: req.params.password});
    res.send('hello3');
});
// 在该目录下，使用 npm start 启动
app.listen(3000, () => {
    console.log("success");
});
console.log('Listening on port 3000...');