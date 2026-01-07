//Filtrar menu 
// ### Filtro das categorias do menu

const bebidasQuentes = document.getElementById("quentes")
const bebidasFrias = document.getElementById("frias")
const pastelaria = document.getElementById("pastelaria")

const listaBebidasQuentes = document.getElementById("listaQuentes")
const listaBebidasFrias = document.getElementById("listaFrias")
const listaPastelaria = document.getElementById("listaPastelaria")

bebidasQuentes.addEventListener("click", filtrarQuentes)

function filtrarQuentes(e) {
    e.preventDefault(); 
    listaBebidasQuentes.classList.add("active")
    listaBebidasFrias.classList.remove("active")
    listaPastelaria.classList.remove("active")
    bebidasQuentes.parentElement.classList.add("selectedMenuItem")
    bebidasFrias.parentElement.classList.remove("selectedMenuItem")
    pastelaria.parentElement.classList.remove("selectedMenuItem")
}

bebidasFrias.addEventListener("click", filtrarFrias)

function filtrarFrias(e) {
    e.preventDefault();
    listaBebidasFrias.classList.add("active")
    listaBebidasQuentes.classList.remove("active")
    listaPastelaria.classList.remove("active")
    bebidasQuentes.classList.remove("selectedMenuItem")
    bebidasFrias.classList.add("selectedMenuItem")
    pastelaria.classList.remove("selectedMenuItem")
}

pastelaria.addEventListener("click", filtrarPastelaria)

function filtrarPastelaria(e) {
    e.preventDefault();
    listaBebidasFrias.classList.remove("active")
    listaBebidasQuentes.classList.remove("active")
    listaPastelaria.classList.add("active")
    bebidasQuentes.classList.remove("selectedMenuItem")
    bebidasFrias.classList.remove("selectedMenuItem")
    pastelaria.classList.add("selectedMenuItem")
}

//Atualizar Carrinho  
// A atualização do carrinho vem depois de: "Click botões - adicionar elementos ao carrinho: ### Adicionar produtos ao basket"


let basket = []; 



function updateBasketDisplay () {
    let conteudoBasketzinho = document.getElementById("cartcontent")
    conteudoBasketzinho.innerHTML = ""
    let total = 0
    if (basket.length == 0) {
        conteudoBasketzinho.innerText = "Carrinho está vazio"
    } else {
        for (let i=0; i<basket.length; i++) {
            let nome = basket[i].nome
            let preco = basket[i].preco
            let quantidade = basket[i].quantidade
            let subtotal = preco*quantidade
            total = total + subtotal
            let frase = quantidade + "x " + nome + " - " + subtotal.toFixed(2) + "€"
            let p = document.createElement("p")
            p.innerText = frase; 
            conteudoBasketzinho.appendChild(p);
            let botaoMenos = document.createElement("button")
            botaoMenos.addEventListener("click", () => reduzirProduto(basket[i].id))
            botaoMenos.innerText = "-"
            conteudoBasketzinho.appendChild(botaoMenos)
            let botaoMais = document.createElement("button")
            botaoMais.addEventListener("click", () => aumentarProduto(basket[i].id))
            botaoMais.innerText = "+"
            conteudoBasketzinho.appendChild(botaoMais)

    }   
        } 
        let hr = document.createElement("hr")
        conteudoBasketzinho.appendChild(hr)
        let pTotal = document.createElement("p")
        pTotal.innerText = "Total = " +  total.toFixed(2) + "€"
        conteudoBasketzinho.appendChild(pTotal)
}

updateBasketDisplay(); 

// redução de produto 
// ### Remoção de produtos no basket

function reduzirProduto(numID) {
    console.log("este é o basket", basket); 
    for (i=0; i<basket.length; i++) {
        if ((basket[i].id == numID) && (basket[i].quantidade >1)){
            basket[i].quantidade = basket[i].quantidade - 1;            
            break; 
        } else if ((basket[i].id == numID) && (basket[i].quantidade == 1)) {
            basket.splice(i, 1)
            break; 
        }
    }
    updateBasketDisplay(); 
}

function aumentarProduto(numID) {
    for (i=0; i<basket.length; i++) {
        if (basket[i].id == numID) {
            basket[i].quantidade = basket[i].quantidade + 1;
            updateBasketDisplay(); 
            break; 
        } 
    }
}




const carrinho = document.getElementById("basket")
const painelCarrinho = document.getElementById("painelCarrinho")
const fechar = document.getElementById("closeCart")

carrinho.addEventListener("click", mostrarPainel)
fechar.addEventListener("click", fecharPainel);

function mostrarPainel () {
    painelCarrinho.classList.add("open")
}

function fecharPainel () {
    painelCarrinho.classList.remove("open")
}

//Click botões - adicionar elementos ao carrinho 
// ### Adcionar produtos ao basket

const botoes = document.querySelectorAll(".icon-addCart"); 
console.log(botoes)

botoes.forEach (botao => {
    botao.addEventListener("click", () => addToCart(botao))
}); 

console.log(botoes)


function addToCart (botao) {
    const card = botao.parentElement.parentElement
    const produto = {
        id: card.dataset.id,
        nome: card.dataset.name,
        preco: Number(card.dataset.price),
        quantidade: 1
    }
    let produtoExistente = procurarNoCarrinho(produto.id); 
    if  (produtoExistente != null){
        produtoExistente.quantidade = produtoExistente.quantidade + 1
    } else {
        basket.push(produto); 
    }
    updateBasketDisplay() 
}


function procurarNoCarrinho(id) {
    for (i=0; i<basket.length;  i++) {
        if (id == basket[i].id) {
            console.log("o produto" + basket[i].nome)
            return basket[i]
        } 
    }
}

//Menu Hamburguer
// ### Menu Hamburguer


const botaoHamburguer = document.getElementById("hamburguer")
const menuHamburguer = document.getElementById("menuBurguer")

botaoHamburguer.addEventListener("click", exporMenu)

function exporMenu () {
    menuHamburguer.classList.toggle("open")
    botaoHamburguer.setAttribute("aria-expanded", true); 
}

//Painel de Informação para taxas de entrega
// ### Pop-up/Modal

//Abrir

const botaoInformativo = document.getElementById("infoTaxa")
const painelTaxaEntrega = document.getElementById("textoTaxaEntrega")

botaoInformativo.addEventListener("click", mostrarInformacaoCustos)

function mostrarInformacaoCustos () {
    painelTaxaEntrega.classList.add("open")
}

//Fechar



const fecharPainelCruz = document.getElementById("closePainelInfo")


fecharPainelCruz.addEventListener("click", fecharPopUpTaxa) 


function fecharPopUpTaxa() {
    painelTaxaEntrega.classList.remove("open")
}

//Painel de Informação para tempo de Entrega
// ### Pop-up/Modal


//Abrir


const botaoInformativoTempo = document.getElementById("infoTempo")
const painelTempoEntrega = document.getElementById("textoTempoEntrega")

botaoInformativoTempo.addEventListener("click", mostrarInformacaoTempo)

function mostrarInformacaoTempo () {
    painelTempoEntrega.classList.add("open")
}

//Fechar

const botaoFecharTempo = document.getElementById("closeInfoTempo")

botaoFecharTempo.addEventListener("click", fecharPopUpTempo)

function fecharPopUpTempo() {
    painelTempoEntrega.classList.remove("open")
}


//Limpar carrinho 
// ### Limpeza total do basket

const limparTudo = document.getElementById("limparCarrinho")

limparTudo.addEventListener("click", limpezaTotal)

function limpezaTotal () {
    basket = []
    updateBasketDisplay(); 
}



// 

//Carregar da página principal para a secundária com categorias filtradas



function carregarPagina () {
        if (window.location.search == "?area=frias") {
            listaBebidasFrias.classList.add("active")
            listaBebidasQuentes.classList.remove("active")
            listaPastelaria.classList.remove("active")
        }
        else if (window.location.search == "?area=pastelaria") {
            listaBebidasFrias.classList.remove("active")
            listaBebidasQuentes.classList.remove("active")
            listaPastelaria.classList.add("active")
        }  else if (window.location.search == "?area=quentes") {
            listaBebidasFrias.classList.remove("active")
            listaBebidasQuentes.classList.add("active")
            listaPastelaria.classList.remove("active")
        } 
            
}
