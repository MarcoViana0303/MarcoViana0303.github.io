const projects = [
    {
      "id": 1,
      "title": "Tryunfo",
      "description": "O projeto (feito com React) tem como base o estilo do jogo Super Triunfo, aonde é possível criar um baralho com tema livre, visualizar todas as cartas que foram adicionadas ao mesmo e jogar com o baralho criado.",
      "image": require('../photos/projects/projeto-1.png'),
      "link": "https://github.com/MarcoViana0303/project-tryunfo"
    },
    {
      "id": 2,
      "title": "Star Wars API",
      "description": "Neste projeto, desenvolvi uma aplicação web que faz uma requisição para a API de Star Wars e preenche uma tabela com os dados dos planetas retornados.",
      "image": require('../photos/projects/projeto-2.png'),
      "link": "https://github.com/MarcoViana0303/project-starwars-planets-search"
    },
    {
      "id": 3,
      "title": "App de Receitas",
      "description": "O projeto Recipes App é um aplicativo de receitas que foi criado com dados vindos de uma API.",
      "image": require('../photos/projects/projeto-3.png'),
      "link": "https://github.com/MarcoViana0303/project-recipes-app"
    },
    {
      "id": 4,
      "title": "Carteira de gastos",
      "description": "Este projeto consiste em uma aplicação web para gerenciamento de despesas pessoais.",
      "image": require('../photos/projects/projeto-4.png'),
      "link": "https://github.com/MarcoViana0303/project-trybewallet"
    },
    {
      "id": 5,
      "title": "Trybewarts",
      "description": "Neste projeto, o objetivo foi criar um formulário de inscrição para a escola fictícia 'Trybewarts'.",
      "image": require('../photos/projects/projeto-5.png'),
      "link": "https://github.com/MarcoViana0303/project-trybewarts"
    },
    {
      "id": 6,
      "title": "Trybers and Dragons",
      "description": "Este projeto é um exemplo de aplicação dos princípios da arquitetura SOLID e os conceitos da Programação Orientada a Objetos (POO) em um ambiente de jogos de interpretação de papéis (RPG).",
      "image": require('../photos/projects/projeto-6.jpg'),
      "link": "https://github.com/MarcoViana0303/project-trybers-and-dragons"
    },
    {
      "id": 7,
      "title": "Trivia",
      "description": "O projeto consiste em um jogo de perguntas e respostas baseado no jogo Trivia (no estilo show do milhão americano).",
      "image": require('../photos/projects/projeto-7.png'),
      "link": "https://github.com/MarcoViana0303/project-trivia-react-redux"
    },
    {
      "id": 8,
      "title": "React Testing Library",
      "description": "A aplicação contém uma implementação completa de todos os requisitos da Pokédex. Meu objetivo foi, para cada requisito listado, escrever testes que garantam sua corretude, atentando-se aos falsos positivos.",
      "image": require('../photos/projects/projeto-8.png'),
      "link": "https://github.com/MarcoViana0303/react-testing-library"
    },
    {
      "id": 9,
      "title": "TrybeTunes",
      "description": "A aplicação faz uma requisição à uma API de músicas. Nela, é possível pesquisar por álbuns e ouvir um trecho da música escolhida.",
      "image": require('../photos/projects/projeto-9.png'),
      "link": "https://github.com/MarcoViana0303/project-trybetunes"
    },
    {
      "id": 10,
      "title": "Talker Manager",
      "description": "Aplicação para cadastro de palestrantes utilizando API de um CRUD.",
      "image": require('../photos/projects/projeto-11.png'),
      "link": "https://github.com/MarcoViana0303/project-talker-manager"
    },
    {
      "id": 11,
      "title": "Unit Tests",
      "description": "Projeto desenvolvido para praticar a implementação de testes unitários em funções Javascript.",
      "image": require('../photos/projects/projeto-12.png'),
      "link": "https://github.com/MarcoViana0303/unit-tests"
    },
    {
      "id": 12,
      "title": "Trybesmith",
      "description": "Loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma API, utilizando Typescript e Sequelize.",
      "image": require('../photos/projects/projeto-10.png'),
      "link": "https://github.com/MarcoViana0303/project-trybesmith"
    },
    {
      "id": 13,
      "title": "Pro-Filer",
      "description": "Trabalhei em uma aplicação com uma interface de linha de comando (CLI) que recebe como entrada um caminho (diretório ou arquivo) e gera um relatório com informações sobre o caminho informado.",
      "image": require('../photos/projects/projeto-13.png'),
      "link": "https://github.com/MarcoViana0303/project-profiler"
    },
    {
      "id": 14,
      "title": "Blogs API",
      "description": "Desenvolvidos uma API e um banco de dados para a produção de conteúdo para um blog. A aplicação foi desenvolvida em Node.js usando o pacote sequelize para fazer um CRUD de posts, no objetivo de criar endpoints que estarão conectados ao banco de dados seguindo os princípios do REST.",
      "image": require('../photos/projects/projeto-14.png'),
      "link": "https://github.com/MarcoViana0303/project-blogs-api"
    },
    {
      "id": 15,
      "title": "MongoDB Commerce",
      "description": "Nesse projeto, trabalhei com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas.",
      "image": require('../photos/projects/projeto-15.jpg'),
      "link": "https://github.com/MarcoViana0303/project-mongodb-commerce"
    },
    {
      "id": 16,
      "title": "Tech News",
      "description": "Implementei um projeto que tem como principal objetivo fazer consultas em notícias sobre tecnologia. As notícias podem ser obtidas através da raspagem do blog da Trybe.",
      "image": require('../photos/projects/projeto-16.png'),
      "link": "https://github.com/MarcoViana0303/project-tech-news"
    },
    {
      "id": 17,
      "title": "Projeto Osten Moove",
      "description": "O objetivo deste projeto era criar um sistema de reserva de ferramentas destinado a mecânicos, fornecendo uma solução eficaz para o gerenciamento de ferramentas e suas reservas.",
      "image": require('../photos/projects/projeto-17.png'),
      "link": "Projeto referente ao desafio prático - Osten Moove"
    },
    {
      "id": 18,
      "title": "All for One",
      "description": "Neste projeto, usei um banco de dados desenvolvido pela Microsoft para revisar e consolidar todos os principais conceitos de SQL. O banco de dados utilizado foi o Northwind.",
      "image": require('../photos/projects/projeto-18.png'),
      "link": "https://github.com/MarcoViana0303/project-all-for-one"
    },
  ]

export default projects;
