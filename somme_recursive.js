function fact_somme(input) {
    if(input>1) {
        return resultat = input + fact_somme(input-1)
    }
    if(input==1) {
        return 1;
    }
}

console.log(fact_somme(5));