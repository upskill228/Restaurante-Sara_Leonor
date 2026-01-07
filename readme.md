
# Projecto realizado por: Leonor Pereira e Sara Pina

## Tema escolhido - Opção 3: O Menu Digital

Escolhemos o Menu digital, tendo realizado o site para um café. 

## Link repositório WEB 
https://github.com/upskill228/Restaurante-Sara_Leonor.git


## Passos para executar a vossa página

Para aceder: Usar Live Server na pasta do projeto. 

Para executar a nossa página, iniciar live server em index.html.
Aqui, é-se reencaminhado para a página principal.

<img src="imagens/Layout_Friends.png" width="400" height="300">

Esta página representa a página principal do site e é representativa da apresentação do restaurante.

A navegação nesta página pode ocorrer por seguir a continuidade da página que apresenta as seguintes secções:
- sobre nós
- galeria
- menu
- contactos & reservas
- footer

Ou, aceder a estas secções (excepto footer), pelo menu lateral:


<img src="imagens/paginaPrincipal.png" width="400" height="300">


Para aceder à página secundária (Menu e que oferece interatividade para proceder à compra online), existem três possibilidades:

- Clicar em "loja online" no canto superior direito da página principal
- Aceder a "No menu" da página principal e selecionar qualquer uma das três categorias (bebidas quentes, bebidas frias e pastelaria)
- Directamente por live server de menu.html

Na loja online (página secundária), recomendamos experienciar a interatividade criada para simular uma loja online.

Como tal, no fim da página do lado esquerdo, encontra-se o menu completo com as diferentes categorias.

Pode-se selecionar qualquer uma delas, que será filtrada e apresentada os templates dos diferentes produtos.
Podem ser adicionados ao carrinho (icon do canto superior direito que é expandível ao click, e vice-versa).
Pode-se ainda diminuir quantidade de qualquer produto no basket ou limpar carrinho. 

<img src="imagens/carrinhoSite.png" width="400" height="300">

Existem janelas modais feitas. Recomendamos, abertura do menu hamburguer no canto superior esquerdo. Assim como, abertura do icon "i" (informação) para informações adicionais nos custos de entrega e tempo de entrega. 

Adicionamente, neste readme, explicamos seguidamente algumas das tomadas de decisão (para ir de encontro ao solicitado) e exploramos como desenvolvemos alguma da interatividade do site.
Neste subtópico, foram atribuimos nomes aos títulos por exemplo (### Filtro das categorias do menu) que foram também atribuidos no documento JS (menu-scripts.js) para ser melhor acedidos. 
A ordem contudo é diferente no ficheiro JS versus readme. 

Cada página tem um ficheiro CSS e JS correspondente, identificado pelo nome atribuido.
Assim, página principal inclui: index.html, scripts.js e style.css.
Página "loja online" inclui: menu.html, menu-scripts.js e menu-styles.css.


## Principais decisões tomadas e justificação da adequação

Neste ponto expomos de forma mais desenvolvida as principais escolhas que fizemos em ambas as páginas tanto a nível de layout como de interatividade para reproduzir a experiência de um utilizador num site de restauração actual. 
Neste último, fizemos opção de trabalhar a interatividade de forma a reproduzir alguns dos pontos solicitados, assim como explorar novos (mencionado no subtópico interatividade JS).

Assim uma das nossas prioridades no site foi devolver o solicitado em layout: "Grelhas de produtos apetitosos (cards), tipografia elegante, formulário de reservas."
Assim, como em interatividade: "Filtrar menu (Entradas/Pratos/Sobremesas); Modal de reserva; Galeria de fotos."

A enumeração dos mesmos decorre ao longo desta secção. 

## Na Página principal

Escolha do tema e layout

Para elaborar a página do restaurante/café fictício, decidimos inspirarmo-nos na série "Friends" e criar um "Central Perk" em Lisboa.
Para tal, escolhemos imagens/fotografias que representassem o espaço da série e fomos buscar o logótipo que já existia na série.

Por o Central Perk ter um ambiente muito ecléctico e cheio de cor, optámos por criar um visual web mais minimalista. Desta forma quisemos conjugar as fotografias do espaço, com elementos gráficos/blocos de cor que unificassem e dessem ritmo às secções do website, mas mantendo o foco no essencial e tendo atenção à acessibilidade.


Nos seguintes parágrafos, especificamos mais sobre a tomada de decisão relativa ao layout desta página mantendo a nossa perspetiva assim como a do utilizador.

### Header 
    
No header tentámos continuar com o aspecto minimalista, dando prioridade ao menu hamburger, mesmo para desktop.
Esta decisão permitiu-nos ter espaço visual para um call to action para a loja online (menu.html) e criou-se mais separação entre menu, logótipo e CTA.

### Landing Page / intro

De forma a tentar captar a atenção do utilizador, optou-se pela fotografia da fachada parcialmente coberta por um elemento gráfico branco, em ângulo. Esta inserção permitiu também criar espaço para o texto (o único h1 da página) e uma pequena animação em css que convida a continuar a explorar o site.

### Sobre Nós

Achámos que seria importante reservar uma secção para dar a conhecer a história do Central Perk.
Para tal, articulou-se um bloco de cor vertical, fotografia do espaço interior do café e texto simulado que explicaria a origem do café e agora a sua nova morada em Lisboa.

### Galeria de Fotos

Optámos por uma galeria tipo masonry pois permite uma melhor comunicação entre imagens com tamanhos diferentes.
Quando fazemos "hover" sobre as imagens, há um ligeiro zoom/aumento de tamanho da imagem e aumento na intensidade da sombra da mesma. Na nossa opinião, estes elementos contribuem para uma maior interactividade, tornando a página mais dinâmica.

### No Menu

Nesta secção apresentamos mais uma forma de integrar ambas as páginas desenvolvidas no projecto.
Cada imagem representa uma das categorias principais (bebidas quentes, bebidas frias e pastelaria) com links para a respectiva apresentação. Aqui remete para a nossa página secumdária (descrita abaixo), com o menu selecionado filtrado.
(Ver menu-scripts.js em "Carregar da página principal para a secundária com categorias filtradas", que se encontra no final da página)

Ao fazer "hover" sobre as imagens, estas fazem um zoom mais discreto, que se limita ao tamanho do seu contentor.
Deste modo, pretendemos criar efeitos semelhantes (zoom) que unifiquem a página no seu todo mas que ao mesmo tempo permitam fazer pequenas distinções e criar dinamismo.

### Contactos e Reservas

Para mostrar os contactos, fez-se uso de links funcionais (href="mailto: e href="tel:) e criou-se um novo CTA para o formulário de reservas.
Este aparece num modal, com campos de preenchimento obrigatório (required).
Para a criação deste formulário, fizemos uso de diversos tipos de input, nomeadamente "text", "email", "date", "time" e "number". Sendo que para o "number" foram definidos limites de uma pessoa (mínimo) a 20 pessoas (máximo).
Foram criados diversos addEventListener para melhor interagir com o modal:
É possível fechar o modal com a tecla ESC, clicando fora do conteúdo ou utilizando o botão "X", criado para esse efeito.

Quando se clica no botão para submeter a reserva, aparece uma mensagem que simula o envio com sucesso.

### Footer

Para o footer, optou-se por dividi-lo em duas secções:

No topo, criou-se links para as redes sociais (com target="_blank") e fez-se um pequeno formulário para subscrever Newsletter.
Depois de se preencher com o email (é um campo required), quando se clica no botão para subscrever, aparece uma mensagem que simula o envio com sucesso.

No final da página temos o copyright e o ano actual, escrito de forma dinâmica com a função getFullYear().


## Página secundária/menu

Nesta página, o nosso objectivo foi criar um template de como seria a interface para o utilizador num cenário real de restauração. Usamos como referência a app Uber Eats para algumas das coisas que gostariamos de disponibilizar e da interatividade que seria necessária construir.

Note-se que muitas coisas funcionam como uma template e que poderiam ser mais exploradas e desenvolvidas. 
Tentamos nomear as mesmas na sequência deste documento. 

### Apresentação da página secundária (loja online)
 
A apresentação da página, de uma forma generalizada, é a seguinte: 

- Cabeçalho com menu "hambúrguer", nome do utilizador (pressupõe que foi feito Log In), nome do café, barra de pesquisa e e ícon do basket.
- Uma imagem decorativa alusiva à restauração selecionada ("café")
- Conteúdo principal com duas secções. Primeiramente:
    - Informação descritiva do café nomeadamente morada
    - Cotação do café (4.7 likes - 251 reviews)
    - Opção "radio-type" entre entrega ao domicilio ou recolha no estabelecimento 
    - Conteúdo informativo sobre taxas associadas à entrega ao domicilio 
    - Finalmente, conteúdo informativo sobre médio do tempo de entrega 

Note-se que foi pensado na estrutura mobile-first, como tal, há elementos no cabeçalho (nome do utilizador e barra de pesquisa) que só aparecem para ecrãs superiores a 700px. Até então encontram-se no painel lateral que pode ser acessido pelo menu hambúrguer. Aqui, não são visíveis quando aparecem respetivamente no cabeçalho. 

Seguidamente, a outra secção:
    - Menu navegação (bebidas quentes, bebidas frias e pastelaria)
    - Apresentação da categoria selecionada (ou do default - bebidas quentes) com apresentação dos respetivos produtos da categoria em "template" cards

### Acesso ao menu

Assim, nesta página, o principal foco é o acesso ao menu por parte do utilizador. 

No caso, de termos feito a opção por um café, optamos por categorizar os produtos em três categorias (seis produtos por cada):
    - bebibas quentes
    - bebidas frias
    - pastelaria

Estas são as categorias principais, mas num contexto real, faria sentido ter mais categorias e mais produtos. 
O que foi desenvolvido foi neste contexto como template (como referenciado acima).

Este acesso é apresentado num menu de navegação lateral (à esquerda na página), em categorias, e como solicitado, permite também ao utilizador filtrar os produtos que quer ver.
Ou seja, o default da nossa página apresenta a primeira categoria (neste caso bebidas quentes), com a característica de poder ser selecionado e apresentado cada categoria individualmente através do "click" nessa mesma categoria por parte do utilizador.

Mais ainda navegar entre páginas, como descrito acima, ao permitir fazer a selecção de qualquer uma das três categorias na página princiapl e abrir directamente esta página com a categoria já filtrada.

Mais ainda, cada produto, é apresentado num template card, que apresenta as seguintes informações:
    - fotografia do produto
    - Nome do produto
    - preço (em euros). A apresentação nesta unidade deve-se à localização central do café escolhida (Portugal).
    - Percentagem de likes (reviews) do produto associado ao número de clientes que fez a review ao mesmo
    (Isto pressupõe um sistema interativo em que o utilizador poderia deixar uma review e haveria uma contabilização total das reviews deixadas e uma média calculada automaticamente e atualizada na página.
    Este poderia ser um ponto a ser futuramente desenvolvido e articulado com cada produto.)
    - Descrição do produto
    - Ícon de "mais" (adicção do produto ao basket - ver mais à frente)


## Interatividade JS

Associamos os sutópicos aqui dados no ficheiro "menu-scripts.js" para permitir melhor encontrar cada uma das funções desenvolvidas.

### Filtro das categorias do menu

Para permitir filtrar categorias apresentadas foram necessárias duas coisas: criação de variáveis e associação de evento (click) a variável.

Associado a cada categoria tivemos que criar duas variáveis. 

A do menu de navegação que exibe o nome da categoria (bebidas quentes, bebidas frias e pastelaria).
Fizemo-lo por associação do pseudo-selector id atribuido.
Ex: const bebidasQuentes = document.getElementById("quentes")

Criamos também a variável que contêm a lista a ser apresentada (todos os produtos de determinada categoria).
Ex: const listaBebidasQuentes = document.getElementById("listaQuentes")

Associamos o evento click à primeira variável, menu de selecção, ao qual atribuimos uma função.

Esta função, realiza 3 coisas:
    - e.preventDefault() 
    Impede o comportamento padrão do browser (reload da página)
    - atribuição de uma classe (add) à categoria seleccionada e eliminação da mesma às restantes (remove)
    Esta classe em CSS permite a visibilidade dos produtos (ex: display: grid)
    - atribuição e remoção de outra classe às categorias (selecionada versus restantes)
    Que atribui "background-color" à categoria selecionada (optamos por light grey)


### Adicionar produtos ao basket

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

Por fim, chama outra função de suporte ("updateBasketDisplay). 

Nesta função, é percorrido o array basket. Se existirem produtos no array são criadas variáveis (nome, preço, quantidade, subtotal e total).

É ainda criado elemento html ("p") e adicionado ao elemento html "pai" que é o painel do carrinho de compras.
Ao sair do ciclo for, é criado outro elemento HTML "p" e adicionado ao elemento HTML pai em questão, que contêm a informação do preço total (que será visto no carrinho de compras). 

Ao iniciar esta função, garantimos que o total é zero e não existe conteúdo neste elemento HTML (ou sejá não é exibido nada no carrinho, na interface).

Associamos a abertura/fecho do "painel carrinho de compras" ao associarmos o evento clique, através de atribuição/remoção de classe CSS que representa o display do mesmo ou não, respectivamente.

### Remoção de produtos no basket

Para a concretização da redução de produtos no carrinho, tivemos que regressar à função "Update Display Basket" e criar um elemento html (o botão menos e botão mais respetivamente). A ambos, adicionar evento click que gera função que por sua vez leva à função de suporte criada (para não proceder à execução imediata da função). Esta função passa um parâmetro (o id do produto).

Nas funções de suporte, reduzir produto ou aumentar produto, percorremos o array basket, e quando identificado o id do produto em questãoo diminui-se ou aumenta-se a quantidade do mesmo em um respetivamente e leva novamente à função "uptade basket display" para atualização na interface, com um break final para não levar a um loop infinito.


### Limpeza total do basket

Posteriormente, adicionamos um botão "Limpar tudo" que permite a limpeza do carrinho. 

A nível de JS isto significou obter o elemento "botão" e associar um evento click ao mesmo. Ao o fazer, reatribuimos o valor do array basket (basket = []) e fizemos a chamada novamente a função já criada previamente "Update Display basket".



### Menu Hamburguer

Criámos um menu hambúguer que reage ao evento "click" e consecutivamente expõe e esconde, respectivamente, um painel lateral com possibilidades genéricas (Gerir conta; favoritos; convidar amigos; ajuda e terminar sessão).
Nenhum desses elementos é interactivo, mas representa um elemento padrão comum a muitos sites de restauração. (Ponto 3 dos aspectos que podem ser futuramente trabalhados) 

### Pop-up/Modal

Críamos duas janelas pop-up na página secundária no ícon de informação, tanto para informações adicionais sobre custos extra e sobre demora na entrega da encomenda. 
Para fechar a janela, associamos ao clique do icon cruz "X" no topo superior direito da janela pop-up.


## Aspectos que podem futuramente ser trabalhados 

1. Identificamos algumas falhas na formatação do site quanto testamos a responsividade do mesmo, nomeadamente, existe scroll horizontal presente na página secundária, que idealmente não estaria presente. 
Contudo, fizemos a opção de priorizar a interatividade nesta página, como descrito acima, (filtro de categorias; adição, redução e limpeza do carrinho; janelas pop-up e menu hambúrguer) e reforçamos a parte estética/visual na página principal.

2. Reviews serem geradas e automatizadas a sua actualização na página (de cada produto e do café)

3. Num contexto real, após a seleção dos produtos a serem comprados e a forma (delivery ou pick-up), permitir a compra online e gerar o evento 

4. Painel do utilizador (menu hamburguer) oferecer interatividade nos respectivos elementos

5. Para os pop-ups informativos, da página secundária, pode ser expandido a interação, por exemplo, ao adicionar evento click fora do elemento para fechar (na página em si) e/ou impedir o scroll da página até o elemento ser fechado. 



  
