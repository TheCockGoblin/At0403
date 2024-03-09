var nomeGlob = "Loja_Gamer";
var mensagemGlob = "Pedido";

function enviar()
{
    var nTele = document.getElementById("telefone");
    var linkZipzop = "https://wa.me/" + nTele + "?text=Nome: " + nomeGlob + "-" + mensagemGlob; 
    window.open(linkZipzop, "_blank");
}