var nome = prompt("Come ti chiami? ");
var sesso = prompt("Inserire il sesso: ");

if(sesso == "maschio" || sesso == "Maschio" || sesso == "MASCHIO"){
  document.getElementById('sesso').className = "blue";
}else{
  document.getElementById('sesso').className = "red";
}

document.getElementById('sesso').innerHTML = nome;
