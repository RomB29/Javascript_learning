function addition(var1, var2) {
    let resultat = var1 + var2;
    return resultat;
}
function soustraction(var1, var2) {
    let resultat = var1 - var2;
    return resultat;
}
function division(var1, var2) {
    let resultat;
    var2 != 0 ? resultat = var1 / var2 : new Error("Erreur div par 0");
    return resultat;
}
function multiplication(var1, var2) {
    let resultat = var1 * var2;
    return resultat;
}
var resultat;
let restart = true;
do {
    do {
        var choix = Number(prompt("Que souhaitez-vous faire ? \n \n \
        1 - Addition \n \
        2 - Soustraction \n \
        3 - Division \n \
        4 - Multiplication "
        )); // var car let ne peut être lu en dehors de la boucle do
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4)

    do {
        var premiereValeur = Number(prompt("Première valeur:"));
        var secondeValeur  = Number(prompt("Seconde valeur:"));
    } while (isNaN(premiereValeur) && isNan(secondeValeur))


    try {
        switch(choix) {
            case 1:
                resultat = addition(premiereValeur, secondeValeur);
                break;
            case 2:
                resultat = soustraction(premiereValeur, secondeValeur);
                break;
            case 3:
                resultat = division(premiereValeur, secondeValeur);
                break;
            case 4:
                resultat = multiplication(premiereValeur, secondeValeur);
                break;
            default:
                alert("Oups, veuillez recommencer l'opération");
                break;
        }
        alert("Votre résultat est: " + resultat);
    }
    catch (error) {
        alert(error);       
    }
    restart = confirm("Nouveau calcul ?");
} while(restart)