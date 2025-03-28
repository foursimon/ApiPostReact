<h1><img src="./src/assets/react.svg" width="50px">ApiPostReact</h1>
<h2><img src="./src/assets/goal.png" width="30px">Objetivo</h2>
<p>Este projeto foi construído para colocar em prática meus conhecimentos com a biblioteca React e testar a comunicação entre essa aplicação com a minha API do repositório <a href="https://github.com/foursimon/HttpClientApi">HttpClientApi</a>.</p>
<h2><img src="./src/assets/linguagem.png" width="30px">Tecnoligias utilizadas</h2>
<ul>
    <li><img src="./src/assets/react.svg" width="30px"><p>React: para desenvolver os componentes e permitir uma interação mais rápida para
    o usuário atráves do uso de State;</p></li>
    <li><img src="./src/assets/js.png" width="30px"><p>Javascript: para realizar requisições HTTP para a minha API;</p></li>
    <li><img src="./src/assets/css.png" width="30px"><p>CSS: para estilizar a interface;</p></li>
    <li><img src="./src/assets/html.png" width="30px"><p>HTML: para definir uma raiz para a renderização dos componentes de React.</p></li>
</ul>

<h2><img src="./src/assets/question.png" width="30px">Como funciona?</h2>
<p>Realizo requisições HTTP para minha API através do Javascript com o método fetch.</p>
<p>Para a requisição ser aprovada, é necessário passar a chave da API no cabeçalho da requisição.</p>
<p>As funções que realizam essas requisições são exportadas para os componentes poderem utilizá-las.</p>
<p>O componente App.jsx é responsável por receber essas funções e passar os dados para outros componentes.</p>
<p>App.jsx possui um state chamado "page" que é responsável por definir qual componente será renderizado na tela através de
um vetor com cada componente definido.</p>
<p>O componente DashMenu retorna botões que, ao serem clicados, retornam um novo índice para para o state "page", que renderiza um novo componente definido pelo vetor.</p>
<p>O componente DashBoard é responsável por renderizar uma tabela com os dados recebidos de App. Os itens da tabela no corpo dela são renderizado pelo componente TableItem, que é criado de acordo com os objetos puxados da API.</p>

<h2>Aplicação</h2>
<img src="./src/assets/showcase.gif" width="1000px">