# Database - Base de Dados JSON

> Este diretório tem como intuito armazenar o "db.json" arquivo de base de dados para o JSON SERVER

> Para rodar a base de dados local e utiliza-la como uma 'fake api', siga os procedimentos a seguir.

- Considerando que você já tenha lido o README localizado na raiz do repositório e tenha o NODE instalado em seu computador, então:

- Instale o JSON SERVER (via NPM)

```
$ npm i -g json-server
```

- Após a instalação, abra um Terminal/Powershell/CMD, navegue até a pasta /database onde o arquivo db.json está, e rode o seguinte comando para iniciar a API fake com JSON Server:

```
$ json-server db.json
```

- Sua API irá ser iniciada e estará pronta para interação com o seu Front-end atráves dos métodos de consumo de API (utilizando AXIOS, XMLHttpRequest ou Fetch como Client, no nosso caso o AXIOS)

--------------------------------------

> Algumas observações:

- O primeiro parametro do objeto no arquivo db.json é considerado pelo json-server como o que seria o 'endpoint' de uma API, então caso queira mais 'endpoints', basta criar mais parametros abaixo do "notas".
- O nome do Arquivo é db.json por questões de semantica e facilidade de localização dentro do projeto, podendo ser alterado para o nome que desejar, porem ao alterar o nome do arquivo deverá ser alterado também o nome no comando `$ json-server nome-do-arquivo.json`

> Links de Apoio:

- [Documentação - JSON Server](https://github.com/typicode/json-server)

- [Rodar seu database json online](https://my-json-server.typicode.com/)

- [JSONPlaceholder API online para testes/prototipos](http://jsonplaceholder.typicode.com/)

- [Criando uma API REST falsa com JSON Server](https://code.tutsplus.com/pt/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871)