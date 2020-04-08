import cipher from './cipher.js';


document.getElementById("encode").addEventListener("click", encode );
document.getElementById("decode").addEventListener("click", decode );
document.getElementById("limpar").addEventListener("click", limpar );
document.getElementById("confirmar").addEventListener("click", confirmar );

function encode(event){
  event.preventDefault();
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("msgentrada").value;//toUpperCase();
    document.getElementById("msgsaida").innerHTML=cipher.encode(offset, string);
    document.getElementById("confirmar").style.display="block";
 }
function decode(event){
  event.preventDefault();
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("msgentrada").value.toUpperCase();
    document.getElementById("msgsaida").innerHTML=cipher.decode(offset, string);
    document.getElementById("confirmar").style.display="block";
 }

function limpar(event){
    event.preventDefault();
    document.getElementById("offset").value="";
    document.getElementById("msgentrada").value="";
    document.getElementById("msgsaida").value="";
    document.getElementById("pessoasCadastradas").value="";
}


//function sair(){
   // event.preventDefault();
  //  window.close();
//
function confirmar(event){
    event.preventDefault();
    document.getElementById("formulario").style.display="none";
    document.getElementById("voltar").style.display="block";
    document.getElementById("final").style.display="block";
    document.getElementById("confirmar").style.display="none";
  let pessoas = document.getElementById("pessoasCadastradas").value;
  let gabi = document.getElementById("1").value;
  let jardel = document.getElementById("2").value;
  let offset = parseInt(document.getElementById("offset").value);
  let string = document.getElementById("msgentrada").value.toUpperCase();
  document.getElementById("voltar").addEventListener("click",voltar);
 
   if (pessoas==gabi){
     document.getElementById("suamsg").innerHTML= "Olá Gabi, voĉe recebeu uma nova messagem. Copie sua senha e sua mensagem e volte para decifra-lá."     
     document.getElementById("off").innerHTML= "Sua senha é " + offset
     document.getElementById("cifrada").innerHTML= "Sua mensagem é:" + cipher.encode(offset, string);
     document.getElementById("decifrada").innerHTML= "Sua mensagem é:" + cipher.decode(offset, string);
    }else if (pessoas==jardel){
      document.getElementById("suamsg").innerHTML= "Olá Jardel, voĉe recebeu uma nova messagem. Copie sua senha e sua mensagem e volte para decifra-lá."
      document.getElementById("off").innerHTML= "Sua senha é " + offset
      document.getElementById("cifrada").innerHTML= "Sua mensagem é:" + cipher.encode(offset, string);
      document.getElementById("decifrada").innerHTML= "Sua mensagem é:" + cipher.decode(offset, string);
    }else {
    document.getElementById("suamsg").innerHTML= "Olá Carla, voĉe recebeu uma nova messagem. Copie sua senha e sua mensagem e volte para decifra-lá."
    document.getElementById("off").innerHTML= "Sua senha é " + offset
    document.getElementById("cifrada").innerHTML= "Sua mensagem é:" + cipher.encode(offset, string);
    document.getElementById("decifrada").innerHTML= "Sua mensagem é:" + cipher.decode(offset, string);
    }
  function voltar(){
    document.getElementById("formulario").style.display="block";
    document.getElementById("final").style.display="none";
  }
}

   console.log();