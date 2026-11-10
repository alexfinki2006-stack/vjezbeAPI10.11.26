let brojac=0;
let gumb=document.querySelector("#gumb");

gumb.addEventListener("click", function()
{
    brojac++;
    document.querySelector("#brojac").textContent=brojac;
});