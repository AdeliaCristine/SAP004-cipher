const cipher = {
  encode: function(offset, string) {
   let resultadoCipher="";
   for (let i = 0; i<string.length; i++){
    let n = string.charCodeAt(i);
     
   //let offset = Number(document.getElementById("offset")).value;
    //let  string = document.getElementById("msgentrada").value;
    //let n = string.charCodeAt(i);
   // let letraFinal = String.fromCharCode((((n-65) + offset) % 26)+65);
    //resultadoCipher +=letraFinal;
    //for (let i = 0; i<string.length; i++){
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=99){
    
        let n = string.charCodeAt(i);
        resultadoCipher += String.fromCharCode((((n-65) + offset) % 26)+65);
    
      } else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
    
     // let n = string.charCodeAt(i);
        resultadoCipher += String.fromCharCode((((n-97) + offset) % 26)+97);
    
      } else if (string.charCodeAt(i)===32) {
     // let n = string.charCodeAt(0);
        resultadoCipher += String.fromCharCode(n);
      }  else {
    //let n = string.charCodeAt(0);
        resultadoCipher+= String.fromCharCod(n);
      }
    return resultadoCipher;
  }
},



   
  //return resultadoCipher;
      
decode: function(offset, string) {
  let resultadoCipher="";
  for (let i = 0; i<string.length; i++){
    
    let n = string.charCodeAt(i);
    let letraFinal = String.fromCharCode((((n-90) - offset) % 26)+90);
    resultadoCipher +=letraFinal;
  
 
  }
  
 return resultadoCipher;
},
}

export default cipher;
