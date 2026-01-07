# Projecto realizado por: Leonor Pereira e Sara Pina

## Tema escolhido - Opção 3: O Menu Digital

"Site moderno para um restaurante, café ou food truck.

Foco:
Grelhas de produtos apetitosos (cards), tipografia elegante, formulário de reservas.

Interatividade:
Filtrar menu (Entradas/Pratos/Sobremesas); Modal de reserva; Galeria de fotos."

## Link repositório WEB 
https://github.com/upskill228/Restaurante-Sara_Leonor.git


# Página principal
Para elaborar a página do restaurante / café fictício, decidimos inspirarmo-nos na série "Friends" e criar um "Central Perk" em Lisboa.
Para tal, escolhemos imagens / fotografias que representassem o espaço da série e fomos buscar o logótipo que já existia na série.

Por o Central Perk ter um ambiente muito ecléctico e cheio de cor, optámos por criar um visual web mais minimalista. Desta forma quisemos conjugar as fotografias do espaço, com elementos gráficos / blocos de cor que unificassem e dessem ritmo às secções do website, mas mantendo o foco no essencial e tendo atenção à acessibilidade.

## Header
No header tentámos continuar com o aspecto minimalista, dando prioridade ao menu hamburger, mesmo para desktop.
Esta decisão permitiu-nos ter espaço visual para um call to action para a loja online (Página Coffee Break) e criou-se mais separação entre menu, logótipo e CTA.

## Landing Page / intro
De forma a tentar captar a atenção do utilizador, optou-se pela fotografia da fachada parcialmente coberta por um elemento gráfico branco, em ângulo. Esta inserção permitiu também criar espaço para o texto (o único h1 da página) e uma pequena animação em css que convida a continuar a explorar o site.

## Sobre Nós
Achámos que seria importante reservar uma secção para dar a conhecer a história do Central Perk.
Para tal, articulou-se um bloco de cor vertical, fotografia do espaço interior do café e texto simulado que explicaria a origem do café e agora a sua nova morada em Lisboa.

## Galeria de Fotos
Optámos por uma galeria tipo masonry pois permite uma melhor comunicação entre imagens com tamanhos diferentes.
Quando fazemos "hover" sobre as imagens, há um ligeiro zoom / aumento de tamanho da imagem e aumento na intensidade da sombra da mesma. Na nossa opinião, estes elementos contribuem para uma maior interactividade, tornando a página mais dinâmica.

## No Menu
Nesta secção apresentamos mais uma forma de integrar ambas as páginas desenvolvidas no projecto.
Cada imagem representa uma das categorias principais (bebidas quentes, bebidas frias e pastelaria) com links para a respectiva apresentação.
Ao fazer "hover" sobre as imagens, estas fazem um zoom mais discreto, que se limita ao tamanho do seu contentor.
Deste modo, pretendemos criar efeitos semelhantes (zoom) que unifiquem a página no seu todo mas que ao mesmo tempo permitam fazer pequenas distinções e criar dinamismo.
No final desta secção temos novo CTA que convida a conhecer o menu completo na página Coffee Break.
De notar que, tal como as imagens, os botões e CTAs também tem animações de zoom quando se faz "hover" sobre eles.

## Contactos e Reservas
Para mostrar os contactos, fez-se uso de links funcionais (href="mailto: e href="tel:) e criou-se um novo CTA para o formulário de reservas.
Este aparece num modal, com campos de preenchimento obrigatório (required).
Para a criação deste formulário, fizemos uso de diversos tipos de input, nomeadamente "text", "email", "date", "time" e "number". Sendo que para o "number" foram definidos limites de uma pessoa (mínimo) a 20 pessoas (máximo).
Foram criados diversos addEventListener para melhor interagir com o modal:
É possível fechar o modal com a tecla ESC, clicando fora do conteúdo ou utilizando o botão "X", criado para esse efeito.

Quando se clica no botão para submeter a reserva, aparece um "alert" com uma mensagem que simula o envio com sucesso.

## Footer
Para o footer, optou-se por dividi-lo em duas secções:
No topo, criou-se links para as redes sociais (com target="_blank") e fez-se um pequeno formulário para subscrever a Newsletter.
Depois de se preencher com o email (é um campo required), quando se clica no botão para subscrever, aparece um "alert" com uma mensagem que simula o envio com sucesso.
No final da página temos o copyright e o ano actual, escrito de forma dinâmica com a função getFullYear().

# Página "Coffee Break"

Nesta página, o nosso objectivo foi criar um template de como seria a interface para o utilizador num cenário real de restauração. Usamos como referência a app Uber Eats para algumas das coisas que gostariamos de disponibilizar e da interatividade que seria necessária construir.

Note-se que muitas coisas funcionam como uma template e que poderiam ser mais exploradas e desenvolvidas. 
Tentamos nomear as mesmas na sequência deste documento. 

## Apresentação da página
 
A apresentação da página, de uma forma generalizada, é a seguinte: 

![](/img/readme_pag1)

- Cabeçalho com menu "hambúrguer", nome do utilizador (pressupõe que foi feito Log In), nome do café, barra de pesquisa e e ícon do basket.
- Uma imagem decorativa alusiva à restauração selecionada ("café")
- Conteúdo principal com duas secções. Primeiramente:
    - Informação descritiva do café nomeadamente morada
    - Cotação do café (4.7 likes - 251 reviews)
    - Opção "radio-type" entre entrega ao domicilio ou recolha no estabelecimento 
    - Conteúdo informativo sobre taxas associadas à entrega ao domicilio 
    - Finalmente, conteúdo informativo sobre médio do tempo de entrega 

![](/img/readme_pag2)

- Seguidamente, a outra secção:
    - Menu navegação (bebidas quentes, bebidas frias e pastelaria)
    - Apresentação da categoria selecionada (ou do default - bebidas quentes) com apresentação dos respetivos produtos da categoria em "template" cards

## Acesso ao menu

Assim, nesta página, o principal foco é o acesso ao menu por parte do utilizador. 
No caso, de termos feito a opção por um café, optamos por categorizar os produtos em três categorias (seis produtos por cada):
 - bebibas quentes
 - bebidas frias
 - pastelaria

Estas são as categorias principais, mas num contexto real, faria sentido ter mais categorias e mais produtos. 
O que foi desenvolvido foi neste contexto como template (como referenciado acima).

Este acesso é apresentado num menu de navegação lateral (à esquerda na página), em categorias, e como solicitado, permite também ao utilizador filtrar os produtos que quer ver.
Ou seja, o default da nossa página apresenta a primeira categoria (neste caso bebidas quentes), com a característica de poder ser selecionado e apresentado cada categoria individualmente através do "click" nessa mesma categoria por parte do utilizador.

Mais ainda, cada produto, é apresentado num template card, que apresenta as seguintes informações:
 - fotografia do produto
 - Nome do produto
 - preço (em euros). A apresentação nesta unidade deve-se à localização central do café escolhida (Portugal).
 - Percentagem de likes (reviews) do produto associado ao número de clientes que fez a review ao mesmo
 (Isto pressupõe um sistema interativo em que o utilizador poderia deixar uma review e haveria uma contabilização total das reviews deixadas e uma média calculada automaticamente e atualizada na página.
 Este poderia ser um ponto a ser futuramente desenvolvido e articulado com cada produto.)
 - Descrição do produto
 - Ícon de "mais" (adicção do produto ao basket - ver mais à frente)


## Filtro das categorias/Interatividade JS

Para permitir filtrar categorias apresentadas foram necessárias duas coisas: criação de variáveis e associação de evento (click) a variável.

Associado a cada categoria tivemos que criar duas variáveis. 

A do menu de navegação que exibe o nome da categoria (bebidas quentes, bebidas frias e pastelaria).
Fizemo-lo por associação do pseudo-selector id atribuido.
Ex: const bebidasQuentes = document.getElementById("quentes")

Criamos também a variável que contêm a lista a ser apresentada (todos os produtos de determinada categoria).
Ex: const listaBebidasQuentes = document.getElementById("listaQuentes")

Associamos o evento click à primeira vriável, menu de selecção, ao qual atribuimos uma função.

Esta função, realiza 3 coisas:
 - e.preventDefault() 
 Impede o comportamento padrão do browser (reload da página)
 - atribuição de uma classe (add) à categoria seleccionada e eliminação da mesma às restantes (remove)
 Esta classe em CSS permite a visibilidade dos produtos (ex: display: grid)
 - atribuição e remoção de outra classe às categorias (selecionada versus restantes)
 Que atribui "background-color" à categoria selecionada (optamos por light grey)



## Adcionar ao basket/Interatividade JS

Primeiramente criámos um array vazio (basket) associado ao "carrinho de compras". 
De seguida, criamos outro array, que associamos todos os "botões de adição" que se encontram associados a cada produto.
Desta vez, fizemo-lo pelo pseudo-selector classe. 

Ex: const botoes = document.querySelectorAll(".icon-addCart"); 

Para cada um destes botões associamos um evento (click) que gerou uma função.
Esta função em si tem várias finalidades (criação de variável e objeto) e recorre a funções de suporte (para aumentar quantidade do produto no basket; adicionar novos produtos; atualizar informação na interface)

A primeira variável a ser criada é, o elemento HTML que atribuimos dataset atributos (id, nome, preço e quantidade).
A segunda é um objecto (produto) com essas mesmas propriedades. 
Seguidamente, chamámos outra função de suporte que nos devolvia o produto em si (se existente no array basket - quando criado vazio).
Se existente, aumentava a quantidade em 1, senão adicionava o produto ao array basket ("basket.push(produto)")
Finalmente, chama outra função de suporte ("updateBasketDisplay). 
Nesta função, é percorrido o array basket. Se existirem produtos no array são criadas variáveis (nome, preço, quantidade, subtotal e total).
É ainda criado elemento html ("p") e adicionado ao elemento html "pai" que é o painel do carrinho de compras.
Ao sair do ciclo for, é criado outro elemento HTML "p" e adicionado ao elemento HTML pai em questão, que contêm a informação do preço total (que será visto no carrinho de compras). 
Ao iniciar esta função, garantimos que o total é zero e não existe conteúdo neste elemento HTML (ou sejá não é exibido nada no carrinho, na interface).

Associamos a abertura/fecho do "painel carrinho de compras" ao associarmos o evento clique, através de atribuição/remoção de classe CSS que representa o display do mesmo ou não, respectivamente.


## Menu Hamburguer

Criámos um menu hambúguer que reage ao evento "click" e consecutivamente expõe e esconde, respectivamente, um painel lateral com possibilidades genéricas (Gerir conta; favoritos; convidar amigos; ajuda e terminar sessão).
Nenhum desses elementos é interactivo, mas representa um elemento padrão comum a muitos sites de restauração. (Ponto 3 dos aspectos que podem ser futuramente trabalhados) 

## Pop-up/Modal

Críamos duas janelas pop-up na página secundária no ícon de informação, tanto para informações adicionais sobre custos extra e sobre demora na entrega da encomenda. 
Para fechar a janela, associamos ao clique do icon cruz "X" no topo superior direito da janela pop-up.


## Aspectos que podem futuramente ser trabalhados (interactividade)

1. Reviews serem geradas e automatizadas a sua actualização na página (de cada produto e do café)
2. Num contexto real, após a seleção dos produtos a serem comprados e a forma (delivery ou pick-up), permitir a compra online e gerar o evento 
3. Painel do utilizador (menu hamburguer) oferecer interatividade nos respectivos elementos
4. Para os pop-ups informativos, da página secundária, pode ser expandido a interação, por exemplo, ao adicionar evento click fora do elemento para fechar (na página em si) e/ou impedir o scroll da página até o elemento ser fechado. 