var idGlob = "";

function adicionarCarrinho(batata)
{
    var elemento = document.getElementById("result1");

    elemento.textContent = batata;

    idGlob = batata;
    elemento.textContent = batata;

    console.log(batata);
    localStorage.setItem("idGlob", JSON.stringify(idGlob));
}


var teste = JSON.parse(localStorage.getItem("idGlob"));



function mostrarCarrinho()
{
    var resultado = document.getElementById("resultado");

    resultado.textContent = teste;
    console.log(teste);

}




