var express=require("express");
var app=express();

//设置跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 引用路由文件
var chartOne=require("./router/one.js");
var chartTwo=require("./router/two.js");
var chartThree=require("./router/three.js");
var chartFour=require("./router/four.js");
var chartMap=require("./router/map.js")
// 中间件中使用路由
app.use("/one",chartOne)
app.use("/two",chartTwo)
app.use("/three",chartThree)
app.use("/four",chartFour)
app.use('/map',chartMap)
// 请求是localhost:3000/user/路由文件中的地址
app.listen(3000,function(){
    console.log('服务器运行在 http://127.0.0.1:3000');
})