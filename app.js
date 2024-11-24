const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())

/*Подключение к кластеру через VPN */
/*
const mongoUrl ="mongodb+srv://dima:youtube123@cluster0.dxt5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
*/

/*Подключение к домашнему кластеру */
const mongoUrl ="mongodb://127.0.0.1:27017";

mongoose
    .connect(mongoUrl,{
        useNewUrlParser:true,
    })
    .then(()=>{
        console.log("Connect MongoBD")
    })
    .catch((e) => console.log(e));

app.listen(3000,"127.0.0.1",()=>{
    console.log("Server starting");
});

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;

try{
    if(data =="dima" ){
        res.send({status:"ok"})
    }else{
        res.send({status:"user not found"})
    }
}catch(error){
    res.send({status:"error"})
}
})




require("./userDetails");

const User =mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{

    const {name,email,mobile}=req.body;
    try{
        await User.create({
            uname:name,
            email,
            mobile:mobile,
        });
        res.send({status:"ok"})
    }catch(error){
        res.send({status:"error"})
    }
})
