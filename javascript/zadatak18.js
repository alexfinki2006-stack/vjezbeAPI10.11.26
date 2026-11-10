let brojevi=[5,-3,12,0,-7,8,15,-2,0];

let pozitivni=0
let negativni=0
let nula=0
let zbroj=0

for (let i=0; i<brojevi.length; i++)
{
    if (brojevi[i]>0)
    {
        pozitivni++;
    }

    if (brojevi[i]<0)
    {
        negativni++;
    }

    if(brojevi[i]==0)
    {
        nula++;
    }

    zbroj = zbroj+brojevi[i];

}

let aSredina = zbroj / brojevi.length;

console.log("Broj pozitivnih brojeva je "+pozitivni);
console.log("Broj negativnih brojeva je "+negativni);
console.log("Broj nule u nizu brojeva je "+nula);
console.log("Zbroj svih brojeva u nizu je "+zbroj);
console.log("Aritmeticka Sredina svih brojeva iznosi "+aSredina);