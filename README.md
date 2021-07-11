# Reprograma - Projeto AdotaFácil👦🏻👧🏾👩🏾‍🦱👩🏼 
## Amanda Bittencourt - Projeto Final | Back-end | 2021 | Turma 11 

##

Solução que facilita o sistema de adoção e acompanhamento dos adotantes e das crianças a serem a adotadas


A criança disponível para a adoção é incluída no Cadastro Nacional para a Adoção, mas infelizmente os juizados e varas da infância são quem fazem o elo manualmente entre adotantes e os menores cadastrados. 
Não há uma maneira automática de vincular adotantes e adotados, o que pode parecer um primeiro obstáculo. 
No entanto, é necessário que haja esse vínculo, pois é o juizado e a figura de um juiz ou juíza da Vara da Infância que podem proteger as crianças prestes a serem adotadas.
O Projeto ADOTAFÁCIL visa diminuir a burocracia de adoção, e o melhor acesso a estes dados.




<br>
<br>


## Desenvolvimento da aplicação e motivo:
------
### `1. Déficit de registros de crianças disponíveis em banco de dados  nacional é o maior motivo para a demora no processo de Adoção no Brasil `
<img src="https://github.com/amandatrololo/projeto-final-adotafacil/blob/main/adotafacil.jpg" alt="criancas brincando" >


### Com essa api, procuramos facilitar o acesso a informação de todos, seguindo os seguintes critérios: 

## Para as Crianças A serem Adotadas:

* Cadastro de Crianças disponíveis para visitas e/ou adoção;
* Buscar a cidade onde estão estas crianças;
* Atualizar o cadastro(idade, nome, cidade, disponibilidade)

## Para os Adotantes:

* Busca de Crianças disponíveis para visitas e/ou adoção;
* Buscar a cidade onde estão estas crianças;
* Atualizar o seu proprio cadastro(idade, nome, cidade, disponibilidade);
* Ter um login e senha para acompanhar as crianças disponíveis
<br>


____
### 
`Tecnologias que desenvolvidas para essa aplicação:`
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ` | Gerenciador de pacotes|
| `Heroku` | Para subir o projeto com conexoes ja estabelecidas|
| `MongoDb Atlas`| Interface gráfica para verificar se os dados foram persistidos|
 ` Postman` | Interface gráfica para realizar os testes|


`Como prosseguir com o projeto no primeiro momento`
```
1- Iniciar projeto node: npm init -y

2- Instalar express e mongoose: 
npm i --save express mongoose

3- Instalar como dependencias de desenvolvimento o dotenv e o nodemon:
npm i --save-dev dotenv nodemon
```

`Arquitetura - O esqueleto da aplicação`
#### Server.js
> Sobe servidor nodejs, usa as rotas, converte os dados para Json e faz conexao com a importação do db.

#### .env
> Gerencia a variavel de ambiente de configuração do MongoDb

#### .env.example
> Salva a variavel de forma genérica

#### .gitignore
> Ignora arquivos e pastas para o git

#### 📂SRC

#### 📂Routes
>  Cria as rotas apenas com a responsabilidade dos metodos HTTP
#### 📂Controllers
> Cria a lógica e salva as informações do db.
#### 📂Models
> Modela o esquema de dados para o banco.



<br>
**CRUD:**
o endpoint local é: localhost:8080/
o endpoint no heroku é https://amanda-reprograma.herokuapp.com/
<br>
<br>

`Comportamento esperado`
**/Adotantes**
| Recurso | Descrição |
| --- | --- |
| `/` | Deverá listar todos os adotantes cadastrados|

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá criar um novo adotante a partir do corpo da requisição|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um adotante para listá-lo.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um adotante para alterar uma informação específica que será passada pelo corpo da requisição.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um adotante para deletá-lo.|

<br>

`Comportamento esperado`
**/Criancas**
| Recurso | Descrição |
| --- | --- |
| `/` | Deverá listar todas os criancas cadastrados|

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá criar uma nova crianca a partir do corpo da requisição|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar uma crianca para listá-lo.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar uma crianca para alterar uma informação específica que será passada pelo corpo da requisição.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar uma crianca para deletá-la.|

<br>

***Obs.: Testes no postman e persistencias no mongodb***

`Teste de persistencia no  MongoCompass`




<br>

---

### 

`Arquitetura Final :`
#### 📂adotafacil
  #### Server.js
  > Chama a porta local e require('dotenv')

  #### .gitignore
  > Ignora arquivos e pastas do node_modules e .env

  #### 📂SRC
   #### App.js
	> Sobe servidor nodejs, usa as rotas, converte os dados para Json e faz conexao com a importação do db.
  #### 📂Routes
  >  Cria as rotas apenas com a responsabilidade dos metodos HTTP
  #### 📂Controllers
  > Cria a lógica e salva as informações do db.
  #### 📂Models
  > Modela o esquema de dados para o banco.

`Schema Utilizados`

Usar o Mongoose para modelar o objeto: 

**Adotantes:**

* nomeAdotante
  - String
* sexoCrianca
  - String
* Idade
  - Number
* telefone
  - String
* Email
  - String
  - required
* Senha
  - String
  - required



**Criancas:**

* Id
  - Number
  - required
* Nome
  - String
  - required
* Idade
  - Number
* Bairros
  - String
* Idade
  - String
  - required
* DiasSemana
  - String
  - required
* Cidade
  - String
* Estado
  - String
* Disponivel
  - Boolean
<br>

<br>
<br>


---
## Amanda Bittencourt
- [instagram](https://www.instagram.com/amanda.trololo)
- [linkedin](https://www.linkedin.com/in/amanda-bittencourt-/)
- [github](https://github.com/amandatrololo)
