function calculerIMC(poids,taille) {
    let IMC;
    if(taille > 100) {
        taille = taille/100;
    }
    
    IMC = poids / Math.pow(taille,2); 
    return IMC
}

let indiceIMC;
alert("Ceci est un calculateur d'IMC, il va donc vous faloir entrer votre poids (kg) et votre taille (cm ou m)");
let poids  = prompt("Votre poids ?");
let taille = prompt("Votre taille ?");

indiceIMC = calculerIMC(poids,taille);
alert("Votre IMC est de: " + indiceIMC);