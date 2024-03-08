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

function exibirItensNoCarrinho() 
{
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinho = document.getElementById("listId");
    // Limpa o conteúdo atual do carrinho
    carrinho.innerHTML = '';
    // Adiciona os itens do carrinho ao elemento 'carrinho'
    carrinhoItens.forEach(item => {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${item.nome} - R$ ${item.preco},00`;
        carrinho.appendChild(novoItem);
        });
}  

function calcularTotal()
{
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const total = carrinhoItens.reduce((acc, item) => acc + item.preco, 0);
    const totalElemento = document.getElementById('total');
    totalElemento.textContent = `Preço final: R$ ${total},00`;
}

function limpar()
{
    let carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    document.getElementById('listId').innerHTML = '';
    document.getElementById('total').innerHTML = '';
    localStorage.removeItem('carrinho');
    carrinhoItens = null;
}

exibirItensNoCarrinho();



