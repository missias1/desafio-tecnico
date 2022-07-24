# API de ativos e clientes

Esse projeto foi realizado para o desafio técnico e tem como objetivo: 

- Listar informações dos ativos e dados dos clientes;
- Realizar operações de compra, venda, saque e depósito;
- Ser utilizada para se comunicar com o front de um aplicativo de investimentos em ações.

## Conteúdo
- Tecnologias Utilizadas
- Instalação
- Como rodar a API
- Executando aplicação
- Executando testes
- Diagrama de Relacionamento do banco de dados
- Deploy no Heroku
- Documentação Swagger
- Aprendizados

## Tecnologias utilizadas ✔️

```bash
NodeJS, MySQL, Heroku, Swagger, ExpressJS, Mocha, Chai, Sinon
```

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

Será necessário criar um arquivo .env com as seguintes variáveis

  ```env
PORT=3000
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
JWT_SECRET=
  ```
- ### Rodando localmente 💻

    É necessário ter o node instalado. Caso deseja saber mais, veja [aqui](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos).
    Os comando do script dentro do arquivo `package.json` podem ser utilizados no seu próprio terminal com a utilização do Mysql localmente.

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

Rode o comando abaixo para inicializar o servidor. Ele rodará na porta que especificada no arquivo `.env`.

```bash
  npm run dev
```

## Executando os testes ✔️

Para rodar os testes, rode o seguinte comando

```bash
  npm test
```

Os testes estão com 86% de cobertura, para verificar a cobertura de testes, rode o comando:

```bash
  npm run coverage
```
## Deploy no Heroku ✔️

Foi feito o deploy do projeto no Heroku, utilizando o clearDB como serviço de banco de dados externo.

```bash
  link aqui 
```
Para testar os endpoints, é necessário utilizar uma API Client como o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/). 

Assim é possível enviar requisições de POST, PUT, DELETE e acessar as rotas que exigem autenticação.


## Documentação com Swagger ✔️

A documentação de todas as rotas foi feita utilizando o Swagger. Nele é possível ver as respostas esperadas para cada endpoint, bem como seu formato.

```bash
  link aqui
```

Obs: Foi a primeira vez utilizando o Swagger e por algum motivo a autenticação dele para acessar as rotas sempre retorna o token como inválido. No entanto, por meio da API Client é possível ver o token funcionando corretamente.

