//declarar variable para guardar offset
//guardar variable de texto ingresado por el usuario
//declarar variable de texto ingresado por el usuario para cifrar mensaje

const btnCipher = document.getElementById("btnencode");
let textCipher1 = document.getElementById("text2");  //escribe resultado de la ecuación
btnCipher.addEventListener("click", () => {
    let mnsjEncode = document.getElementById("text1").value.toUpperCase();
    let offset = parseInt(document.getElementById("offset1").value);
    
    textCipher1.innerHTML = window.cipher.encode(mnsjEncode,offset);
});


const btnDecipher = document.getElementById("btndecode");
let textCipher2 = document.getElementById("text4");  //escribe resultado de la ecuación
btnDecipher.addEventListener("click", () => {
    let mnsjDecode = document.getElementById("text3").value.toUpperCase();
    let offset = parseInt(document.getElementById("offset2").value);

    textCipher2.innerHTML = window.cipher.decode(mnsjDecode,offset);
});

document.getElementById("limpiar").addEventListener("click", () => {
    location.reload();
});
 