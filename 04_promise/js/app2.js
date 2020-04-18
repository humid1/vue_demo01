// 先使用 npm install express -S 安装express
// express 4.x版本中将命令工具分出来,安装一个命令工具:  npm install -g express-generator
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

// 处理静态资源
app.use(express.static('public'));
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // 配置传递请求头属性
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Headers", "mytoken");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
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

// -------------fetch的接口----------------
app.get('/fdata',(req, res) => {
    res.send('传统url传递参数！' + req.query.id);
})
app.get('/fdata/:id',(req, res) => {
    res.send('Restful形式的url传递参数！' +req.params.id);
})
app.delete('/fdata/:id',(req, res) => {
    res.send('delete形式请求传递参数！' + req.params.id);
})
app.post('/fdata',(req, res) => {
    res.send('post请求传递参数！' + req.body.uname + '---' + req.body.pwd);
})
app.put('/fdata/:id',(req, res) => {
    res.send('put请求传递参数！' + req.params.id + '--------' + req.body.uname + '---' + req.body.pwd);
})
app.get('/json',(req, res) => {
    res.json({
        uname: '参数1',
        age: 12
    })
})
// ------------axios接口-----------------
app.get('/adata', (req, res) => {
    res.send('hello axios!');
})
app.get('/axios',(req, res) => {
    res.send('axios 使用 get传递的参数：' + req.query.id);
})
app.get('/axios/:id',(req, res) => {
    res.send('axios 使用Restful形式的传递参数：' +req.params.id);
})
app.delete('/axios/:id',(req, res) => {
    res.send('axios 使用 delete形式传递参数：' + req.params.id);
})
app.post('/axios',(req, res) => {
    res.send('axios 使用 post 请求传递参数：' + req.body.uname + '---' + req.body.pwd);
})
app.put('/axios/:id',(req, res) => {
    res.send('axios 使用 put请求传递参数：' + req.params.id + '--------' + req.body.uname + '---' + req.body.pwd);
})

// 在该目录下，使用 npm start 启动
app.listen(3000, () => {
    console.log("success");
});
console.log('Listening on port 3000...');