document.querySelector('#a-supprimer').remove();

// Création élément
let header      = document.createElement("header");
let menu        = document.createElement("div");
let paragraphe  = document.createElement("p");

// Contenu
header.textContent           = "Welcome aboard";
header.style.backgroundColor = "#e3b04b";
header.style.color           = "white";
header.style.padding         = "30px";
header.style.fontSize        = "3em";
header.style.textAlign       = "center";

menu.innerHTML             = "<a href='#Accueil'>Accueil</a> / <a href='#Summary'>Summary</a>";
menu.style.backgroundColor = "#f1d6ab";
menu.style.padding         = "15px";

paragraphe.textContent  = "Paragraphe from Javascript";
paragraphe.style.margin = "15px";
document.body.append(header, menu, paragraphe);