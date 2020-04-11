import cipher from './cipher.js';


document.getElementById("encode").addEventListener("click", encode );
document.getElementById("decode").addEventListener("click", decode );
document.getElementById("limpar").addEventListener("click", limpar );
document.getElementById("confirmar").addEventListener("click", confirmar );


function encode(event){
  event.preventDefault();
    document.getElementById("confirmar").style.display="block";
    let offset = (document.getElementById("offset").value);
    let string = document.getElementById("msgentrada").value;
    document.getElementById("confirmar").style.display="block";
    if (offset==="" ||string==="" ){
      alert("Digite uma senha ou uma mensagem válida!");
    }else{
    document.getElementById("msgsaida").innerHTML=cipher.encode(parseInt(offset), string);
    }
  }
function decode(event){
  event.preventDefault();
  document.getElementById("confirmar").style.display="block";
  let offset = (document.getElementById("offset").value);
  let string = document.getElementById("msgentrada").value;
  if (offset==="" ||string==="" ){
    alert("Digite uma senha ou uma mensagem válida!");
  }else{document.getElementById("msgsaida").innerHTML=cipher.decode(parseInt(offset), string); 
}
}
function limpar(event){
  event.preventDefault();
   document.getElementById("offset").value="";
   document.getElementById("msgentrada").value="";
   //document.getElementById("msgsaida").value="";
   document.getElementById("pessoasCadastradas").value="";    
}

function confirmar(event){
  event.preventDefault();
  document.getElementById("formulario").style.display="none";
  document.getElementById("voltar").style.display="block";
  document.getElementById("final").style.display="block";
  document.getElementById("confirmar").style.display="none";
  document.getElementById("img").style.display="none";
  let pessoas = document.getElementById("pessoasCadastradas").value;
  let gabi = document.getElementById("1").value;
  let jardel = document.getElementById("2").value;
  let offset = parseInt(document.getElementById("offset").value);
  let string = document.getElementById("msgentrada").value;
  document.getElementById("voltar").addEventListener("click",voltar);
  let msgnova = document.getElementById("msgsaida").value;  
 
   if (pessoas===gabi){
         
     document.getElementById("off").innerHTML= "Sua senha é " + offset + "."  
     document.getElementById("suamsg").innerHTML= "Olá Gabi, voĉe recebeu uma nova mensagem. Salve sua mensagem e sua senha e volte para página inicial para cifra-lá ou decifra-ĺá." 
     document.getElementById("cifrada").innerHTML= "Sua mensagem é:" + msgnova;
      
  }else if (pessoas==jardel){
     document.getElementById("off").innerHTML= "Sua senha é " + offset
     document.getElementById("suamsg").innerHTML= "Olá Jardel, voĉe recebeu uma nova mensagem. Salve sua mensagem e sua senha e volte para página inicial para cifra-lá ou decifra-ĺá."  
     document.getElementById("cifrada").innerHTML= "Sua mensagem é:" + msgnova;
     
  }else {
     document.getElementById("off").innerHTML= "Sua senha é " + offset
     document.getElementById("suamsg").innerHTML= "Olá Carla, voĉe recebeu uma nova mensagem. Salve sua mensagem e sua senha e volte para página inicial para cifra-lá ou decifra-ĺá."  
     document.getElementById("cifrada").innerHTML= "Sua mensagem é:" + msgnova;  
    }
    
  }
  function voltar(){
    document.getElementById("formulario").style.display="block";
    document.getElementById("final").style.display="none";
    document.getElementById("offset").value="";
    document.getElementById("msgentrada").value="";
   // document.getElementById("msgsaida").value="";
    document.getElementById("pessoasCadastradas").value=""; 
    document.getElementById("img").style.display="block";
  }

   console.log();