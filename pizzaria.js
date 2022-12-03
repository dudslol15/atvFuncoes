//Pega as informações de cada Option
let tamanho = document.querySelector("#tamanho")
let sabor = document.querySelector("#sabor")
let borda = document.querySelector("#borda")
let bebida = document.querySelector("#bebida")

//Botão para finalizar o pedido
let fPedido = document.querySelector("#fazerPedido")

//Saídas de texto para o Total e Pedidos
let saidaPedido = document.querySelector("#saidaPedido")
let saidaPagamento = document.querySelector("#saidaPagamento")

//Função que define os valores de cada Option e imprime na tela
const imprimirPedido = () => {
  
    let tam = tamanho.value
    let sab = sabor.value
    let bor = borda.value
    let beb = bebida.value
    
    saidaPedido.innerHTML = `Tamanho: ${tam}<br>
    Sabor: ${sab}<br>
    Borda: ${bor}<br>
    Bebida: ${beb}<br>`

    return [tam, sab, bor, beb]

}

//Função que faz o calculo do preço total do pedido e imprime na tela
const calcularImprimirValor = (pedido) => {

    let [tam, sab, bor, beb] = pedido

    let precoTam, precoSab, precoBor, precoBeb

    switch (tam){
        case "Pequena": precoTam = 20; break
        case "Média": precoTam = 40; break
        case "Grande": precoTam = 60; break
        case "Gigante": precoTam = 80; break
    }

    switch (sab){
        case "Frango": precoSab = 5; break
        case "Calabresa": precoSab = 5; break
        case "Portuguesa": precoSab = 5; break
        case "Catupiry": precoSab = 5; break
        case "Brocólis": precoSab = 5; break
    }

    switch (bor){
        case "Sem borda": precoBor = 0; break
        case "Cheddar": precoBor = 5; break
        case "Chocolate": precoBor = 5; break
    }

    switch (beb){
        case "Sem bebida": precoBeb = 0; break
        case "Refrigerante": precoBeb = 10; break
        case "Suco": precoBeb = 8; break
        case "Água": precoBeb = 3; break
        case "Cerveja": precoBeb = 5; break
    }

    let precoTotal = precoTam + precoSab + precoBor + precoBeb

    saidaPagamento.innerHTML = `Preço do Tamanho: R$${precoTam.toFixed(2)}<br>
    Preço do sabor: R$${precoSab.toFixed(2)}<br>
    Preço da borda: R$${precoBor.toFixed(2)}<br>
    Preço da bebida: R$${precoBeb.toFixed(2)}<br>
    <br>
    Total a pagar: R$${precoTotal.toFixed(2)}`

}

//Função que pega o valor de todas as funções e coloca em uma só
function fazerPedido (){

    let pedido = imprimirPedido()

    calcularImprimirValor(pedido)

}

//Evento que faz tudo funcionar
fPedido.addEventListener("click", fazerPedido)