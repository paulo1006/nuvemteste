const  express = require("express");
const app = express();



app.get("/", function(req,res){
    res.send("bem vindo ao meu site de testes")
})

app.get("/produtos", function(req,res){
    res.send(" lista de produtos em faltagit ")
})





app.listen(4000, function(erro){
if(erro){
    console.log("erro ao iniciar")
 }else{
    console.log("servidor iniciado")
 }


})