const express = require("express");
let app =express();
const path = require("path");

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})



app.listen(3000);
