const cipher = {
  encode: function(offset, string) {
    if (offset =="" || string==""||typeof offset!=="number" ||typeof string!=="string"){
      throw new TypeError('Insira uma senha válida ou confira a mensagem digitada.')
    }
    
   let resultadoCipher="";
   for (let i = 0; i<string.length; i++){
    let n = string.charCodeAt(i);
       if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        let n = string.charCodeAt(i);
        resultadoCipher += String.fromCharCode((((n-65) + offset) % 26)+65);
      } else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        resultadoCipher += String.fromCharCode((((n-97) + offset) % 26)+97);
      } else if (string.charCodeAt(i)>=32 && string.charCodeAt(i)<=63){
      //(string.charCodeAt(i)===32) {
        //resultadoCipher += String.fromCharCode(n);
        resultadoCipher += String.fromCharCode(((n-32) % 31)+32);
      } else if (string.charCodeAt(i)===128 ){
        resultadoCipher += String.fromCharCode(128);
      } else if (string.charCodeAt(i)===135 ){
        resultadoCipher += String.fromCharCode(135);
      }else {
        resultadoCipher+= String.fromCharCode(n);
      }
  }
  return resultadoCipher;
},
      
decode: function(offset, string) {
  if (offset =="" || string==""||typeof offset!=="number" ||typeof string!=="string"){
    throw new TypeError('Insira uma senha válida ou confira a mensagem digitada.')
  }
  let resultadoCipher="";
  for (let i = 0; i<string.length; i++){
    
    let n = string.charCodeAt(i);
   // let letraFinal = String.fromCharCode((((n-90) - offset) % 26)+90);
   // resultadoCipher +=letraFinal;
   if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
    let n = string.charCodeAt(i);
    resultadoCipher += String.fromCharCode((((n-90) - offset) % 26)+90);
  } else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
    resultadoCipher += String.fromCharCode((((n-122) - offset) % 26)+122);
  } else if (string.charCodeAt(i)>=32 && string.charCodeAt(i)<=63){
  //(string.charCodeAt(i)===32) {
    //resultadoCipher += String.fromCharCode(n);
    resultadoCipher += String.fromCharCode(((n-32) % 31)+32);
  } else if (string.charCodeAt(i)===128 ){
    resultadoCipher += String.fromCharCode(128);
  } else if (string.charCodeAt(i)===135 ){
    resultadoCipher += String.fromCharCode(135);
  }else {
    resultadoCipher+= String.fromCharCode(n);
  }
} 
 return resultadoCipher;
}
}

export default cipher;
