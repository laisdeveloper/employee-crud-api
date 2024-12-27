# CRUD API de Funcionários

Este projeto consiste em uma aplicação completa para gerenciamento de funcionários, com uma API desenvolvida em Node.js e integração com PostgreSQL. No frontend, é utilizado Angular junto com Bootstrap, SweetAlert e FontAwesome para uma interface moderna e interativa.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Framework para criação da API.
- **PostgreSQL**: Banco de dados relacional para armazenamento de informações.

### Frontend
- **Angular**: Framework para desenvolvimento do frontend.
- **Bootstrap**: Estilização responsiva da interface.
- **SweetAlert**: Alertas interativos e customizados.
- **FontAwesome**: Ícones para enriquecimento visual.

## Funcionalidades
- **Criar**: Cadastro de novos funcionários.
- **Ler**: Listagem de todos os funcionários.
- **Atualizar**: Edição de informações de um funcionário existente.
- **Deletar**: Exclusão de funcionários.

## Como Executar

### Requisitos

Node.js e Angular CLI devem estar instalados, e o PostgreSQL configurado para a correta execução do projeto.

### Backend

Clone o repositório, instale as dependências com `npm install` e configure as variáveis de ambiente no arquivo `.env` para conectar ao PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

Inicie a API com o comando:
```bash
npm start
```

### Frontend

No diretório do frontend, instale as dependências com `npm install` e inicie o servidor de desenvolvimento Angular:
```bash
ng serve
```

Acesse a interface em `http://localhost:4200`.

## Experiências de Aprendizado

### Repositórios de Referência

Durante o desenvolvimento, contei com os repositórios [Employee CRUD API](https://github.com/glaucia86/employee-crud-api) e [Heroes Node API](https://github.com/johnpapa/heroes-node-api) como base de conhecimento. Esses projetos forneceram insights valiosos sobre a estruturação de APIs e manipulação de requisições HTTP, ajudando a consolidar conceitos fundamentais e boas práticas de design e implementação.

### Ferramentas Utilizadas

O uso do **Postman** foi essencial para compreender e testar as requisições HTTP. Essa ferramenta permitiu não apenas verificar o comportamento da API em diferentes cenários, mas também explorar respostas, autenticação e métodos RESTful.

### Boas Práticas

Durante o projeto, apliquei boas práticas como:
- Configuração e uso de variáveis de ambiente para segurança e flexibilidade.
- Versionamento de código com **Git** e **GitHub**, organizando commits de maneira significativa, utilizando branches para novas funcionalidades e mantendo o histórico limpo e rastreável.
- Estruturação modular do código para maior manutenção e reusabilidade.

### Impacto do Projeto

Este projeto foi uma oportunidade única para me aprofundar nas tecnologias de ponta utilizadas no mercado, como Node.js, Angular e PostgreSQL. Além disso, proporcionou um entendimento mais claro sobre:
- O ciclo de vida completo de uma aplicação CRUD.
- Integração entre frontend e backend.
- Práticas de documentação e depuração.

Esse aprendizado não apenas consolidou habilidades técnicas, mas também ampliou minha capacidade de resolver problemas complexos e trabalhar com as principais ferramentas do mercado.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

---
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. 😊
