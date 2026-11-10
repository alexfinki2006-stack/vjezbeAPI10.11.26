let gumb=document.querySelector("#zbroji");

gumb.addEventListener("click", function()
{
    let unos1=document.querySelector("#broj1").value;
    let unos2=document.querySelector("#broj2").value;

    if (unos1 === "" || unos2 === "")
    {
        document.querySelector("#rezultat").textContent = "Popunite oba polja!";
    }

    else
    {
        let broj1=Number(unos1);
        let broj2=Number(unos2);

        let zbroj=broj1+broj2;
        document.querySelector("#rezultat").textContent=zbroj;
    }


});
