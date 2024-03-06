var idGlob = "";

function adicionarCarrinho(batata)
{
    var elemento = document.getElementById("result1");
    alert(batata + " adicionado ao carrinho!");

    idGlob = batata;
    

    console.log(batata);
    localStorage.setItem("idGlob", JSON.stringify(idGlob));
}

var teste = JSON.parse(localStorage.getItem("idGlob"));

var resultado1;
var resultado2;
var resultado3;
var resultado4;
var resultado5;

function mostrarCarrinho()
{

    if(resultado1 == null)
    {
        resultado1 = document.getElementById("resultado1");
        resultado1.textContent = teste;
    }

    else if(resultado2 == null)
    {
        resultado2 = document.getElementById("resultado2");
        resultado2.textContent = teste;
    }

    else if(resultado3 == null)
    {
        resultado3 = document.getElementById("resultado3");
        resultado3.textContent = teste;
    }

    else if(resultado4 == null)
    {
        resultado4 = document.getElementById("resultado4");
        resultado4.textContent = teste;
    }

    else if(resultado5 == null)
    {
        resultado5 = document.getElementById("resultado5");
        resultado5.textContent = teste;
    }

    console.log(teste);

}




