import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 const cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
 const palos = ["♦","♥","♠","♣"]

 const numberRandomCartas = Math.floor(Math.random() * cartas.length);
 const numberRandomPalos = Math.floor(Math.random() * palos.length);

 document.getElementById("arriba").textContent = palos[numberRandomPalos]
 document.getElementById("abajo").textContent = palos[numberRandomPalos]

 document.getElementById("number").textContent = cartas[numberRandomCartas]

 if (palos[numberRandomPalos] == "♥" || palos[numberRandomPalos] == "♦" ){
    document.getElementById("arriba").style.color="red"
    document.getElementById("abajo").style.color="red"
 }

 console.log(cartas[numberRandomCartas], palos[numberRandomPalos])
};

