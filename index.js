// const express = require("express")
// const app = express();
//
// app.listen(5000,function () {
//     console.log("server is running...");
// });
// app.use(express.static("public"));
// //sử dung ejs lam view engine
// app.set("view engine","ejs");
// var counter = 0;
// // app.get("/",function (req,res) {
// //     counter++;
// //     res.send("Xin chao, da vao den nha, ban la nguoi vao thu: "+ counter);
// // });
// // app.get("/",function (req,res) {
// //     counter++;
// //     res.sendFile(__dirname+"/views/home.ejs");
// // });
//
// app.get("/",function (req,res) {
//     counter++;
//     // res.sendFile(__dirname+"/views/home.ejs");
//     let city = req.query.cityname;
//     if(city === undefined){
//         city = "Hanoi,vietnam";
//     }
//     res.render("home",{
//         counter: counter,
//         city:city
//     });
//
// });
//
// app.get("/about-us",function (req,res) {  //req: tiep nhan yeu cau
//     res.send("Gioi thieu ve chung toi");
// });
// var cities = [
//     {
//         id: 1,
//         name: "hanoi",
//         label: "Ha Noi"
//     },
//     {
//         id: 2,
//         name: "haiphong",
//         label: "Hai Phong",
//         description: "muwa"
//
//     },
//     {
//         id: 3,
//         name: "cairo",
//         label: "Cairo, Ai Cap"
//     },
//     {
//         id: 4,
//         name: "london",
//         label: "Luan dob, Anh"
//     },
//     {
//         id: 5,
//         name: "new york",
//         label: "New york, My"
//     },
//
// ];
// const  fs = require("fs");
// app.get("/danh-sach-thanh-pho",function (req,res) {
//     let data = fs.readFileSync("data/thanhpho.json","utf-8");
//     let cities = JSON.parse(data);
//     res.render("cities",{
//         cities:cities
//     })
// });
// // app.get("/danh-sach-thanh-pho",function (req,res) {
// //     res.render("cities",{
// //         cities:cities
// //     })
// // })
// app.get("/thanh-pho/:id",function (req,res) {
//     let cityID= req.params.id;
//     let city = {};
//     let data = fs.readFileSync("data/thanhpho.json","utf-8");
//     let cities = JSON.parse(data);
//     cities.map(function (e) {
//         if(e.id == cityId){
//             city = e;
//         }
//     });
//     res.render("city",{
//         city: city
//     });
// })


const express = require("express");
const app = express();
const  PORT = process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("server is running...")
})

app.listen(5000,function () {
    console.log("server is running...");
});
app.use(express.static("public"));
// sử dụng ejs làm view engine
app.set("view engine","ejs");

var counter = 0;
app.get("/",function (req,res) {
    counter++;
    let city = req.query.cityname;
    if(city === undefined){
        city = "Hanoi,vietnam";
    }
    res.render("home",{
        counter: counter,
        city:city
    });
});

app.get("/about-us",function (req,res) {
    res.send("Gioi thieu ve chung toi");
});
const fs = require("fs");
app.get("/danh-sach-thanh-pho",function (req,res) {
    let data = fs.readFileSync("data/thanhpho.json","utf-8");
    let cities = JSON.parse(data);
    res.render("cities",{
        cities:cities
    })
});

app.get("/thanh-pho/:id",function (req,res) {
    let cityId = req.params.id;
    let city = {};
    let data = fs.readFileSync("data/thanhpho.json","utf-8");
    let cities = JSON.parse(data);
    cities.map(function (e) {
        if(e.id == cityId){
            city = e;
        }
    });
    res.render("city",{
        city:city
    });
});
app.get("/api/mesages",function (req,res) {
    let data = [
        {
            msg: "Xin chao",
            name: "Luna"
        },
        {
            msg: "Hi",
            name: "Long"
        },
        {
            msg: "Di choi k",
            name: "Luna"
        },
    ];
    let rs = {
        status: true,
        message: "Success",
        data: data
    };
    res.send(data);
})
