let buttonTimer = document.querySelector('button');
let interval;
let secondes = 10;

start = () => {
    interval = setInterval(decompte,1000);
}

buttonTimer.addEventListener('click', start);



stop = () => {
    clearInterval(interval);
    document.body.innerHTML += "Stop !"; // += car on ajoute du contenu à la page HTML
}

decompte = () => {

    secondes -= 1;

    if(secondes <= 0 ) {
        stop();
    }

    else {
        document.body.innerHTML += secondes + '<br>'; // br permet de faire un saut de ligne
    }

}

