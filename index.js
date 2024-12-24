const express =require("express");
const cors =require("cors");


const app=express();
app.use(cors());

app.get("/check",(req,res)=>{
    let n=parseInt(req.query.number);
    let r= n%2 === 0?"Even":"Odd";
    res.json({msg:r});

});


app.listen(9000,()=>{console.log("ready to serve @9000");});