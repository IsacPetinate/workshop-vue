# Web-App

> ## Estrutura:

- /public
  - /img - icones e imagens da PWA
  - index.html - arquivo HTML onde o JS será injetado
  - manifest.json - configuração da PWA
- /src
  - /app - camada de aplicação, onde ficarão os componentes e regras de visualização
  - /domain - camada de dominio, onde ficarão as regras e lógicas do JS da app
    - /api - sub camada contendo configurações base da conexao com a API
    - /services - sub camada contendo regras especificas de cada enpoint ou entidade
- /plugins
  - aqui ficam seus plugins, aparece aqui ao instalar um novo pela Dashboard (`vue ui`)

> Após clonar o repositório ou baixar os arquivos, rode o comando abaixo em um terminal dentro da basta raiz onde você descompactou/clonou o projeto:
```
npm install
```
- O comando acima irá baixar a pasta node_modules para que a aplicação funcione e o servidor de desenvolvimento seja iniciado, para roda-lo você deve ter o node instalado.


> Para rodar a Aplicação pelo terminal, rode o comando abaixo
```
npm run serve
```
- Após o servidor ser iniciado, abra no navegador o link que for mostrado no terminal (normalmente é em http://localhost:8080)

> Para rodar a Aplicação pela Interface Gráfica (aberta no navegador), rode o comando abaixo
```
vue ui
```
- Após o servidor ser iniciado, abra no navegador o link que for mostrado no terminal (normalmente é em http://localhost:8080)


> Compilar e minificar para produção:
```
npm run build
```

> Iniciar Testes
```
npm run test
```
- Caso tenha optado por testes e2e e unitários ao gerar o projeto


> Para corrigir erros do Linter
```
npm run lint
```

### Para configurações customizadas:

- Veja [Referencias de Configurações](https://cli.vuejs.org/config/).
