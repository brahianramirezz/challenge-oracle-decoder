function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let ilustracion = document.getElementById("ilustración");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        ilustracion.src = "./img/aplausos.gif";
        document.getElementById("copiar-div").style.display = "block"; // CAMBIO: Muestra el botón de copiar al encriptar
    } else {
        ilustracion.src = "./img/cara.gif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        document.getElementById("copiar-div").style.display = "none"; // CAMBIO: Oculta el botón de copiar si no hay texto
    }                
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let ilustracion = document.getElementById("ilustración");

    let textoCifrado = texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        ilustracion.src = "./img/estrella.gif";
        document.getElementById("copiar-div").style.display = "none"; // CAMBIO: Oculta el botón de copiar al desencriptar
    } else {
        ilustracion.src = "./img/wired-outline-261-emoji-smile.gif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        document.getElementById("copiar-div").style.display = "none"; // CAMBIO: Oculta el botón de copiar si no hay texto
    }
}

function copiarTexto() {
    let texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
    swal("Copiado!", "El texto ha sido copiado al portapapeles.", "success");
}