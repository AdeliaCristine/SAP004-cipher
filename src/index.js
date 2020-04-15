import cipher from './cipher.js';


document.getElementById("encode").addEventListener("click", encode );
document.getElementById("decode").addEventListener("click", decode );
document.getElementById("limpar").addEventListener("click", clean );
document.getElementById("confirmar").addEventListener("click", sendClean );
document.getElementById("confirmar").addEventListener("click", send );
document.getElementById("voltar").addEventListener("click",cleanBack);
document.getElementById("voltar").addEventListener("click",back);

function encode(event){
  event.preventDefault();
    document.getElementById("confirmar").style.display="block";
    let offset = (document.getElementById("offset").value);
    let string = document.getElementById("msg-entrada").value; 
    document.getElementById("msg-saida").innerHTML=cipher.encode(parseInt(offset), string);
}
function decode(event){
  event.preventDefault();
    document.getElementById("confirmar").style.display="block";
    let offset = (document.getElementById("offset").value);
    let string = document.getElementById("msg-entrada").value;
    document.getElementById("msg-saida").innerHTML=cipher.decode(parseInt(offset), string); 
}
function clean(event){
  event.preventDefault();
   document.getElementById("offset").value="";
   document.getElementById("msg-entrada").value="";
   //document.getElementById("msg-saida").value="";
   document.getElementById("pessoas-cadastradas").value="";    
}

function sendClean(event){
  event.preventDefault();
    document.getElementById("formulario").style.display="none";
    document.getElementById("voltar").style.display="block";
    document.getElementById("final").style.display="block";
    document.getElementById("confirmar").style.display="none";
    document.getElementById("img").style.display="none";
}

function send(event){
  event.preventDefault();
    let pessoas = document.getElementById("pessoas-cadastradas").value;
    let msgnova = document.getElementById("msg-saida").value; 
    let offset = (document.getElementById("offset").value);
    document.getElementById("off").innerHTML= `Sua senha é ${offset}.`;
    document.getElementById("sua-msg").innerHTML= `Olá ${pessoas}, voĉe recebeu uma nova mensagem. Salve sua mensagem e sua senha e volte para página inicial para cifra-lá ou decifra-ĺá.`
    document.getElementById("cifrada").innerHTML= `Sua mensagem é:${msgnova}`;
} 
function cleanBack(){
    document.getElementById("offset").value="";
    document.getElementById("msg-entrada").value="";
    //document.getElementById("msg-saida").value="";
    document.getElementById("pessoas-cadastradas").value=""; 
}
function back(){
    document.getElementById("formulario").style.display="block";
   document.getElementById("final").style.display="none";
    document.getElementById("img").style.display="block";
}
//console.log();