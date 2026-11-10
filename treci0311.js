const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());

const studenti=[
    {id:1, ime:"Ana"},
    {id:2, ime:"Marko"},
    {id:3, ime:"Petar"}
];

app.get("/studenti",(req,res)=>
{
    res.json(studenti);
});

app.get("/studenti/:id", (req,res)=>
{
    const id=parseInt(req.params.id);
    const student=studenti.find(s=>s.id===id);
    if(student)
    {
        req.json(student);
    }
    else
    {
        res.status(404).json({greska:"Student nije pronaden."});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server slusa na portu ${PORT}`);
});