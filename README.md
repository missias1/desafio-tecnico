# API para corretora de investimentos :chart_with_upwards_trend:

Esse projeto foi realizado para o desafio técnico e tem como objetivo: 

- Listar informações dos ativos e dados dos clientes;
- Realizar operações de compra, venda, saque e depósito;
- Realizar login e criar contas;
- Ser utilizada para se comunicar com o front de um aplicativo de investimentos em ações.

## Lista de conteúdo :page_facing_up:
- Tecnologias Utilizadas e tomada de decisão
- Instalação
- Como rodar a API
- Executando aplicação
- Executando testes
- Deploy no Heroku
- Documentação Swagger
- Diagramas
- 7 Aprendizados

## Tecnologias utilizadas e tomada de decisão ✔️

O projeto foi desenvolvido com a arquitetura MSC (Model, Service, Controller), possibilitando que as funções desempenhem um papel específico de acordo com sua camada.


![alt text](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![alt text](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![alt text](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![alt text](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

As tecnologias utilizadas foram as aprendidas até aqui como o JavaScript, NodeJS, ExpressJS e MySQL. Esta última foi optada, ao invés de um ORM, por dar maior controle na manipulação do banco de dados e permitir escrever as queries. Utilizando o MySQL, pude trabalhar tendo mais domínio das saídas esperadas pelo banco, além de possibilitar maior entendimento ao lidar com o banco de dados.

Para realizar os testes foram utilizadas as bibliotecas aprendidas até aqui: Sinon, Mocha e Chai.

<img src="https://user-images.githubusercontent.com/87737714/180674056-244f10ac-0706-46a6-828c-f83eefba4080.png" width="90" /> ![alt text](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white) ![alt text](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)

Outras tecnologias utilizadas foram o JWT para fazer autenticação nas rotas, o Heroku para deploy, Swagger para documentar os endpoints, o Docker para desenvolver o projeto e o Eslint para padronização do código.

![alt text](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) ![alt text](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![alt text](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white) ![alt text](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white) ![alt text](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

## Instalação ✔️

Para instalar o projeto

```bash
git clone git@github.com:missias1/desafio-tecnico.git
```
```bash
cd desafio-tecnico
```
```bash
npm install
```

## Como rodar a API ✔️

Será necessário criar um arquivo `.env` com as variáveis listadas abaixo, caso rode localmente.

  ```env
PORT=3000
MYSQL_HOST= localhost
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=heroku_3a2342a6c76f266
JWT_SECRET=suachave
  ```
- ### Rodando localmente 💻

    É necessário ter o node instalado. Caso deseja saber mais, veja [aqui](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos).
    Os comandos do script dentro do arquivo `package.json` podem ser utilizados no seu próprio terminal com a utilização do MySQL localmente (sem Docker).

- ### Rodando com Docker 🐳 
    É necessário ter o Docker e o Docker Compose instalados. Caso deseja saber mais, veja [aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04).
    Com eles instalados corretamente, utilize o comando abaixo na pasta do projeto:

    ```bash
      docker-compose up -d --build
    ```
    O comando acima inicializa os serviços node e db, descritos no arquivo `docker-compose`. Para utilizar o terminal dentro do container, use: 

    ```bash
      docker exec -it desafioTecnico bash
    ```
    Dica: A extensão `Remote - Containers` do VS Code permite trabalhar com os containers mais facilmente.
    
    Para utilizar o terminal do MySQL, digite o comando abaixo, dentro do container do node. A senha está dentro do arquivo docker-compose.
    ```bash
      mysql -u root -p
    ```

## Executando aplicação ✔️

Rode o comando abaixo para inicializar o servidor. Ele rodará localmente na porta que foi especificada no arquivo `.env`.

```bash
  npm run dev
```

## Executando os testes ✔️

Para rodar os testes, rode o seguinte comando

```bash
  npm test
```

Os testes estão com `86%` de cobertura, para verificar a cobertura de testes, rode o comando:

```bash
  npm run coverage
```
<img src="https://user-images.githubusercontent.com/87737714/180671335-40c792f2-e9b9-4d9c-bf6d-219bcdbc994b.png" width= "600">

## [Deploy no Heroku](https://missias1-desafio-tecnico.herokuapp.com/ativos) ✔️

Foi feito o deploy do projeto no Heroku, utilizando o clearDB como serviço de banco de dados externo.

```bash!
  https://missias1-desafio-tecnico.herokuapp.com/ativos
```
Para testar os endpoints, é necessário utilizar uma API Client como o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/). 

Assim é possível enviar requisições de POST, PUT, DELETE e acessar as rotas que exigem autenticação.

<img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" width= "100"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" width= "100">

## [Documentação com Swagger](https://missias1-desafio-tecnico.herokuapp.com/docs/) ✔️

A documentação de todas as rotas foi feita utilizando o Swagger. Nele é possível ver as respostas esperadas para cada endpoint, bem como seu formato.

```bash
  https://missias1-desafio-tecnico.herokuapp.com/docs/
```

Obs1: Foi a primeira vez utilizando o Swagger e por algum motivo a autenticação dele para acessar as rotas sempre retorna o token como inválido. No entanto, por meio da API Client é possível ver o token funcionando corretamente.

Obs2: Selecione o servidor do deploy para que não ocorra erro de conexão com a rede.

## Diagramas ✔️
Foi feita uma abordagem mais simples para lidar com o banco de dados. O foco foi listar as atividades que o usuário pode realizar dentro do aplicativo. Desconsiderando outros papeis com maiores poderes de acesso.

#### Ações que o usuário pode realizar
<img src="/images/mapa_acoes_do_cliente.jpg" width= "700">


#### Relação das tabelas
<img src="/images/diagrama_database.png" width= "700">

## 7 Aprendizados
- Em caso de erro, sempre verifique a importação do arquivo
- Entender bem o problema, sempre é o primeiro passo
- Sempre observe e leia os logs dos erros no terminal atentamente
- Comemore os avanços
- Escrever o problema no papel pode gerar bons insigths
- O Swagger é muito bom
- TDD pode ser divertido
