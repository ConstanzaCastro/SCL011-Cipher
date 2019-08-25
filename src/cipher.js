window.cipher = {
  encode: (mnsjEncode,offset) => {
    let textCipher1 = "";
    //variable vacia para que tome resultado de la fórmula 
    for (let i = 0; i <= mnsjEncode.length; i++) {
      let cipher = mnsjEncode.charCodeAt(i);
      if (cipher >= 65 && cipher <= 90) {
          textCipher1 += String.fromCharCode(((cipher - 65 + offset) % 26) + 65);
          //encode es igual a vacio mas el mensaje cifrado
      }
          else if (cipher == 32) {
              textCipher1 += String.fromCharCode(cipher);
      }

  }
  return textCipher1;
    
  },
  decode: (mnsjDecode,offset) => {
    let textCipher2 = ""; 
    //variable vacia para que tome resultado de la fórmula
    for (let i = 0; i <= mnsjDecode.length; i++) {
      let cipher = mnsjDecode.charCodeAt(i);
      if (cipher >= 65 && cipher <= 90) {
          textCipher2 += String.fromCharCode(((cipher + 65 - offset) % 26) + 65);

      } else if (cipher == 32) {
          textCipher2 += String.fromCharCode(cipher);

      }

  }
  return textCipher2;
  }
};
