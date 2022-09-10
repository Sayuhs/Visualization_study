// 存放路由的文件
var express=require("express");
var router=express.Router()
//引入mock里的json数据
let mapData=require('../mock/china.json')
// 设置路由
router.get("/data",function(req,res){
    res.send({msg:"地图接口",chartData:mapData})
})

// 暴露路由
module.exports=router