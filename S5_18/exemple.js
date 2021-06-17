  let fonctionAnonyme = function(){
    console.log('Je suis une fonction anonyme');
  }
  fonctionAnonyme();
  (function(){ console.log('Je suis une fonction anonyme')})(); // ici nous avons juste englobé notre fonction dans des paranthèses, et ajouté "()" à la fin
  
  