# Teste Sky - Segue o realizado
## App backend in CRUD format with the main requisites and more.


# Proposta

## SINGUP

• Usar status codes de acordo ✔

### • Em caso de sucesso irá retornar um usuário mais os campos: 
  • id: id do usuário (pode ser o próprio gerado pelo banco, porém seria interessante
  se fosse um GUID). ✔
  
  • data_criacao: data da criação do usuário. ✔
  
  • data_atualizacao: data da última atualização do usuário. ✔
  
  • ultimo_login: data do último login (no caso da criação, será a mesma que a
  criação). ✔
  
  • token: token de acesso da API (pode ser um GUID ou um JWT). ✔
 
 
 • Caso o e-mail já exista, deverá retornar erro com a mensagem "E-mail já
  existente". ✔
 
 • O token deverá ser persistido junto com o usuário. ✔
 
 ## SINGIN
 
• Este endpoint irá receber um objeto com e-mail e senha. ✔

• Caso o e-mail exista e a senha seja a mesma que a senha persistida, retornar
igual ao endpoint de sign_up. ✔

• Caso o e-mail não exista, retornar erro com status apropriado mais a mensagem
"Usuário e/ou senha inválidos". ✔

• Caso o e-mail exista mas a senha não bata, retornar o status apropriado 401
mais a mensagem "Usuário e/ou senha inválidos". ✔

## Buscar usuário (Além de buscar apenas um usuário, implementei a busca de todos com a devida autenticação)
 
• Chamadas para este endpoint devem conter um header na requisição de
Authentication com o valor "Bearer {token}" onde {token} é o valor do token
passado na criação ou sign in de um usuário. ✔

• Caso o token não exista, retornar erro com status apropriado com a mensagem
"Não autorizado". ✔

• Caso o token exista, buscar o usuário pelo user_id passado no path e comparar
se o token no modelo é igual ao token passado no header. ✔

• Caso não seja o mesmo token, retornar erro com status apropriado e mensagem
"Não autorizado". ✔

• Caso seja o mesmo token, verificar se o último login foi a MENOS que 30
minutos atrás. ✔

• Caso não seja a MENOS que 30 minutos atrás, retornar erro com status
apropriado com mensagem "Sessão inválida". ✔

• Caso tudo esteja ok, retornar o usuário. ✔

# Requisitos

### Persistência de dados
  Dados do usuário persistidos através do token com tempo de expiração de 30Minutos;
 
### Gestão de dependências via gerenciador de pacotes (npm)
  Todos as dependências instaladas através do npm;
  
### Utilização do ESLINT
  Aplicação construída em javascript com Typescript sendo corrigido e padronizado pelo ESLINT, 
  PRETTIER e EDITORCONFIG;
  
### API: Express, Hapi ou similares
  Aplicação RestFull utilizando express (cors adicionado);
  
### Utilizar banco nosql
  Banco nosql utilizado: MongoDB em nuvem através do atlas, configuração feita e possível de ser
  visualizada no pacote;
  
## Requisitos desejáveis
  
### JWT como token
  Foi utilizado para autenticação e persistência o Json Web token - JWT;
  
### Criptografia não reversível na senha
  Senhas dos usuários criptografadas.
  
# Dependências utilizadas

#### "bcryptjs": "^2.4.3",
#### "cors": "^2.8.5",
#### "date-fns": "^2.16.1",
#### "eslint-import-resolver-typescript": "^2.3.0",
#### "express": "^4.17.1",
#### "jsonwebtoken": "^8.5.1",
#### "moment": "^2.29.0",
#### "mongodb": "^3.6.2",
#### "mongoose": "^5.10.7",
#### "node-uuid": "^1.4.8",
#### "ts-node-dev": "^1.0.0-pre.63"
#### "eslint": "^7.2.0",
#### "prettier": "^2.1.2",
#### "typescript": "^4.0.3"
##### e outras...


# Utilização e requisições
  
  ## SIGNUP

  Utilizar endereço HTTP 👉 https://backendskytest.herokuapp.com/signup

  Método 👉 POST

    Exemplo JSON 👇

    {
      "name": "Henrique Pires",
      "email": "example@gmail.com",
      "password": "123",
      "contactPhones": [
        {
          "phone": "11 988887777",
          "ddd": "11"
        }
       ]
    }

  ## SIGNIN

  Utilizar endereço HTTP 👉 https://backendskytest.herokuapp.com/

  Método 👉 POST

    Exemplo JSON 👇

    {
      "email": "example@gmail.com",
      "password": "123"  
    }

  ## Buscar TODOS os usuários do banco

  Utilizar endereço HTTP 👉 https://backendskytest.herokuapp.com/index/

  🔐 Necessário Token com prefixo Bearer (Disponível no signin)

  Método 👉 POST

    Exemplo JSON 👇

    {
      "email": "example@gmail.com",
      "password": "123"  
    }

  ## Buscar um ÚNICO usuário do banco

  Utilizar endereço HTTP 👉 https://backendskytest.herokuapp.com/index/:id

  🔐 Necessário Token com prefixo Bearer (Disponível no signin)
  🔑 Necessário ID do usuário irá ser buscado (Disponível no signin, signup ou na busca por todos os usuários)

  Método 👉 POST

    Exemplo Busca 👇

    https://backendskytest.herokuapp.com/index/5f709c08867d023ad4010b2c

    🎈 Após o index na estrutura acima passar o ID desejado
    

## Observaçao

  Para melhor simular, utilizar o Insomnia:
  https://insomnia.rest/
  
  ###### Acesso ao banco de dados através da interface visual MongoDB Compass enviado por email
  
  ###### Workspace enviado por email.
  
  

  
