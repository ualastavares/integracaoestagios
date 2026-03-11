const texto = "Não perca tempo com as peças erradas. Contrate com a ";
const palavra = "Integração!";

const elemento = document.getElementById("typing");

let index = 0;

function escrever(){

if(index < texto.length){

elemento.innerHTML += texto.charAt(index);

index++;

setTimeout(escrever,40);

}else{

elemento.innerHTML += '<span class="destaque">'+palavra+'</span>';

}

}

escrever();


function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;

let elementTop = reveals[i].getBoundingClientRect().top;

let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", function(){

menu.classList.toggle("active");

});