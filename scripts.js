
function botonEncriptar() {
    const textarea = document.querySelector('.text-area');
    const output = document.querySelector('#myOutput');
    const text = textarea.value;

    const encryptedText = encriptarTexto(text);
    output.value = encryptedText;
}

function botonDesencriptar() {
    const textarea = document.querySelector('.text-area');
    const output = document.querySelector('#myOutput');
    const text = textarea.value;

    console.log("Texto antes de desencriptar:", text);  
    const decryptedText = desencriptarTexto(text);
    console.log("Texto después de desencriptar:", decryptedText);  

    output.value = decryptedText;
}

function copyText() {
    const output = document.querySelector('#myOutput');
    output.select();
    document.execCommand('copy');
}

function encriptarTexto(texto) {
    return texto
        .replace(/a/g, "b@")
        .replace(/e/g, "c3")
        .replace(/i/g, "d1")
        .replace(/o/g, "f0")
        .replace(/u/g, "g#u");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/g#u/g, "u")
        .replace(/f0/g, "o")
        .replace(/d1/g, "i")
        .replace(/c3/g, "e")
        .replace(/b@/g, "a");
}
