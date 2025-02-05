const express = require("express");
const app = express();

app.get("/health.checkup",function(req , res){
    const username = req.header.username;
    const password =req.header.password;
    const kidneyid = req.header.kidneyid;

    if(password !="Ansh"&& password!="admin"){
        if(kidneyid ==1 || kidneyid ==2)
        res.json({
            msg : "kidney fine"
        })
    }else{
        res.json({
            msg : "invalid input"
        })
    }

    res.status(400).json({"msg":"something is bad"})
});

app.listen(3000);
console.log("server is running on port 3000");