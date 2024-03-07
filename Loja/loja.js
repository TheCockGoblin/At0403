var idGlob = "";

function adicionarCarrinho(nome, preco)
{
    /*
    var elemento = document.getElementById("result1");
    alert(batata + " adicionado ao carrinho!");

    idGlob = batata;
    

    console.log(batata);
    localStorage.setItem("idGlob", JSON.stringify(idGlob));*/
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoItens.push({ nome, preco }); 

    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));

    alert(nome + " adicionado ao carrinho!");
}

function exibirItensNoCarrinho() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinho = document.getElementById("listId");
    // Limpa o conteúdo atual do carrinho
    carrinho.innerHTML = '';
    // Adiciona os itens do carrinho ao elemento 'carrinho'
    carrinhoItens.forEach(item => {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${item.nome} - ${item.preco}`;
        carrinho.appendChild(novoItem);
      });
}  

var teste = JSON.parse(localStorage.getItem("idGlob"));

function mostrarCarrinho()
{
    exibirItensNoCarrinho();
    
    console.log(teste);
}






