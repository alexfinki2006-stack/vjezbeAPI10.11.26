function povrsinaKruga(r)
{
    if (r<0)
    {
        return "polumjer mora biti pozitivan";
    }
    let povrsina=Math.PI*r*r;
    return povrsina;
}

console.log(povrsinaKruga(10));