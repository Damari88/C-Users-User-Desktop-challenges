//e - enter 
//o - ober 
//i - ines 
//a - ai
//u - ufat 

function encriptar(){
    var texto = document.getElementById("inputtexto");
    // la i para que afecte a minusculas//
    //g para todo la linea //
    //m para que afecte a multiples lineas o parrafos//
    var txtcifrado = texto.replace("/e/igm,enter");
    var txtcifrado = txtcifrado.replace("/o/igm,ober");
    var txtcifrado = txtcifrado.replace("/i/igm,ines");
    var txtcifrado = txtcifrado.replace("/a/igm,ai");
    var txtcifrado = txtcifrado.replace("/u/igm,ufat");

    document.getElementById("img").style.display = "none";
    document.getElementById("tex-area").style.display = "none";
    document.getElementById("mensaje").innerHTML = txtcifrado;
    document.getElementById("copy").style.display = show;
    document.getElementById("copy").style.display = inherit;
}
function desencriptar(){
    var texto = document.getElementById("inputtexto");
    // la i para que afecte a minusculas//
    //g para todo la linea //
    //m para que afecte a multiples lineas o parrafos//
    var txtcifrado = texto.replace("/enter/igm,e");
    var txtcifrado = txtcifrado.replace("/ober/igm,o");
    var txtcifrado = txtcifrado.replace("/ines/igm,i");
    var txtcifrado = txtcifrado.replace("/ai/igm,a");
    var txtcifrado = txtcifrado.replace("/ufat/igm,u");

    document.getElementById("img").style.display = "none";
    document.getElementById("tex-area").style.display = "none";
    document.getElementById("mensaje").innerHTML = txtcifrado;
    document.getElementById("copy").style.display = show;
    document.getElementById("copy").style.display = inherit;
}
function copy(){
    var contenido = document.querySelector("mensaje");
    contenido.select();
    Document.exeCommand("copy");
    alert("se copio");
}