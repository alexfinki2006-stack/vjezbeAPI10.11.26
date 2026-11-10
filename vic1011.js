const express=require("express");
const app=express();
const PORT=3000;

const axios=require("axios"); //axios stopira server da nas ne otkaci nakon 5000ms (5s) // npm install express axios

//pocetna ruta
app.get('/', (req, res)=>
{
    res.send("Dobrodosli na API za Chuck Norris sale! Upisite localhost:3000/chuck")
});

app.get('/chuck', async(req, res)=>
{
    try
    {
        //dohvat sale s vanjskog servera
        const odgovor=await axios.get("https://api.chucknorris.io/jokes/random");

        res.json({sala:odgovor.data.value})
    }
    catch(error)
    {
        res.status(500).json({error:"Dogodila se greska"});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});