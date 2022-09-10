// 存放路由的文件
var express=require("express");
var router=express.Router()
//引入mock里的json数据
let threeData=require('../mock/three.json')
// 设置路由
router.get("/data",function(req,res){
    res.send({msg:"第3个接口",chartData:threeData})
})

// 暴露路由
module.exports=router