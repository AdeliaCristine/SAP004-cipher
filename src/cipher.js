const cipher = {
  encode: function(offset, string) {
   let resultadoCipher="";
   for (let i = 0; i<msgentrada.length; i++){
    let offset = document.getElementById("offset").value;
    let  string = document.getElementById("msgentrada").value.toUpperCase();
    let n = string.charCodeAt(i);
    let posicaoDaLetra = (n - 65);
    let posicaoDaLetraDeslocamento = ((posicaoDaLetra + offset) % 26);
    let posicaoFinal = (posicaoDaLetraDeslocamento+65);
    let letraFinal = String.fromCharCode(posicaoFinal);
    resultadoCipher +=letraFinal;  
   }
   
  return resultadoCipher;
           
  

},
}

export default cipher;
