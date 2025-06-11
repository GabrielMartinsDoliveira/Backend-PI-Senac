Backend PI - Senac
Este repositório contém o código-fonte do back-end desenvolvido para o Projeto Integrador do curso de Coding Mobile do Senac.
O projeto foi desenvolvido com Node.js, utilizando Express.js para criação do servidor e Mongoose para integração com banco de dados MongoDB.

```
📚 Tecnologias Utilizadas
•	- Node.js — Ambiente de execução JavaScript no servidor
•	- Express.js — Framework web para Node.js
•	- MongoDB — Banco de dados NoSQL
•	- Mongoose — ODM (Object Data Modeling) para MongoDB
•	- Dotenv — Gerenciamento de variáveis de ambiente
•	- Cors — Middleware para habilitar requisições cross-origin
•	- Bcrypt.js — Criptografia de senhas
•	- Jsonwebtoken (JWT) — Gerenciamento de autenticação baseada em tokens
```

```
🛠️ Estrutura de Pastas
Backend-PI-Senac/
│
├── controller/      # Controladores responsáveis pela lógica de negócio
├── middleware/      # Middlewares para validação e autenticação
├── models/          # Modelos de dados (schemas do MongoDB)
├── routes/          # Definições das rotas da API
├── app.js           # Arquivo principal de inicialização do servidor
├── package.json     # Gerenciamento de dependências e scripts
└── .gitignore       # Arquivos e pastas ignorados no Git
```

⚙️ Como Rodar o Projeto Localmente
1. Clone este repositório:
git clone https://github.com/GabrielMartinsDoliveira/Backend-PI-Senac.git

2. Navegue até o diretório do projeto:
cd Backend-PI-Senac

3. Instale as dependências:
npm install

4. Inicie o servidor:
npm run dev

O servidor estará rodando em: "https://backend-forenseek.onrender.com/api"
Confira a documentação da api em: "https://backend-forenseek.onrender.com/api-docs/#/"
```
🔐 Funcionalidades Principais
•	- Cadastro e autenticação de usuários (com bcrypt + JWT)
•	- Rotas protegidas por autenticação
•	- CRUD de entidades armazenadas no MongoDB
•	- Middleware de verificação de token JWT
•	- Estrutura modularizada para fácil manutenção
```

```
👥 Colaboradores
•	- Gabriel Martins (https://github.com/GabrielMartinsDoliveira)
•	- Mateus Henrique de Assis (https://github.com/MatHenriqueAssis)
•	- Erick Lopes (https://github.com/erickarte)
```
```
Este projeto é de uso educacional e acadêmico no contexto do curso de Coding Mobile do Senac.
🚀 Melhorias Futuras
•	- Implementação de testes unitários
•	- Documentação da API com Swagger
•	- Tratamento de erros mais detalhado
```
