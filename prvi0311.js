const express=require("express");
const app=express();
const PORT=3000;

app.get("/api/pozdrav", (req,res)=>
{
    res.json({poruka:"TEST TEST TEST"}) 
});

app.listen(PORT, ()=>
{
    console.log(`Server slusa na portu ${PORT}`);
})