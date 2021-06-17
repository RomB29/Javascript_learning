let buttonSpoiler = document.querySelector('button');
let div           = document.querySelector('div');
let hidden        = true;
div.style.display = "none";

buttonSpoiler.addEventListener('click', () => {
    if(hidden) {
        buttonSpoiler.textContent = "Cacher";
        div.style.display         = "block";
        hidden = false;
    }
    else {
        buttonSpoiler.textContent   = "Afficher";
        div.style.display = "none";
        hidden = true;
    }
  }
);
