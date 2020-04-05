import cipher from './cipher.js';

//console.log(cipher);
document.getElementById("encode").addEventListener("click", encode );
document.getElementById("decode").addEventListener("click", decode );
document.getElementById("limpar").addEventListener("click", limpar );
//document.getElementById("sair").addEventListener("click", sair );
//document.getElementById("Confirmar").addEventListener("click", confirmar );

function encode(event){
    event.preventDefault();
    let offset = document.getElementById("offset").value;
    let string = document.getElementById("msgentrada").value.toUpperCase();
    let x= cipher.encode(offset,string);
    document.getElementById("msgsaida").value= x;
}
function decode(event){
    event.preventDefault();
   let offset = document.getElementById("offset").value;
   let string = document.getElementById("msgentrada").value.toUpperCase();
   let x= cipher.decode(offset, string);
   document.getElementById("msgsaida").value= x;
}
function limpar(event){
    event.preventDefault();
    document.getElementById("msgentrada").value="";
    document.getElementById("msgsaida").value="";
    console.log("limpou");
}
//function sair(event){
  //  event.preventDefault();
  //  window.close();   

//function confirmar(event){
  //  event.preventDefault();
    //console.log("mudarhtml");
    //window.location.href='gabi.html';
    //document,getElementById("suaMsg").innerHTML= oi

