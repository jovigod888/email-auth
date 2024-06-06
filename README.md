# Email Authorization in TypeScript

Este projeto é um exemplo de autenticação de usuário usando email e senha em um servidor Node.js com TypeScript. Ele utiliza JSON Web Tokens (JWT) para gerenciar a autenticação e proteger rotas.

## Funcionalidades

- Registro de usuários (simulado com uma lista estática)
- Login de usuários com validação de senha
- Geração de tokens JWT
- Proteção de rotas usando middleware de verificação de token

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/download/)
- [JSON Web Tokens](https://jwt.io/)
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)

## Estrutura do Projeto
src/
├── controllers/
│ └── authController.ts
├── middleware/
│ └── authMiddleware.ts
├── models/
│ └── userModel.ts
├── services/
│ └── authService.ts
└── index.ts

## Pré-requisitos

- Node.js instalado 
- NPM ou Yarn instalado

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jovigod888/email-auth
   cd email-auth

2. Instale as dependências:
   ```
   npm install
   ```

4. Crie um arquivo tsconfig.json na raiz do projeto com o seguinte conteúdo:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```
## Uso
1. Inicie o servidor:
   ```terminal
   npm start
2. Faça uma requisição de login:
   ```terminal
   curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email":"user@example.com","password":"password"}'
3. Acesse uma rota protegida usando o token recebido:
   ```terminal
   curl -X GET http://localhost:3000/protected -H "x-access-token: SEU_TOKEN_AQUI"

## Scripts NPM
-`start` Inicia o servidor com `ts-node-dev` para desenvolvimento.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Para mudanças importantes, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (git commit -am 'Adiciona nova feature')
4. Push para a branch (git push origin feature/nova-feature)
5. Abra um Pull Request
