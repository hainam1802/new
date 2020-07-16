const express = require("express");
const app = express();

app.listen(5000,function () {
    console.log("server is running...");
});
app.get("/",function (req,res) {
    
});
app.use(express.static("public"));
// sử dụng ejs làm view engine
app.set("view engine","ejs");
const u = require("u");
app.get("/danh-sach-sp",function (req,res) {
    let data = fs.readFileSync("data/sanpham.json","utf-8");
    let sanpham = JSON.parse(data);
    res.render("sanpham",{
        sanpham:sanpham
    })
});
app.get("/san-pham/:id",function (req,res) {
    let cityId = req.params.id;
    let product = {};
    let data = fs.readFileSync("data/sanpham.json","utf-8");
    let sanpham = JSON.parse(data);
    sanpham.map(function (e) {
        if(e.id == productId){
            productId = e;
        }
    });
    res.render("product",{
        product:product
    });
})