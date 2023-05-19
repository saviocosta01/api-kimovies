# Projeto: KImóveis - TypeORM com Relacionamentos

Através da aplicação é possível realizar o cadastro de imóveis e de usuários interessados na aquisição de propriedades. Além disso, é possível realizar o agendamento e consultar horários de visitas às propriedades disponíveis no banco de dados da imobiliária.


-   O código deve estar em **TypeScript**;
-   Foi feita a **serialização** dos dados utilizando a biblioteca **zod**;
-   Foi utilizado um banco de dados **postgres** para a elaboração da API;
-   Foi utilizado **TypeORM**;
-   

As tabelas estão seguindo essas nomenclaturas para banco e entidade:**

-   Tabela **users**: esta com o nome da sua entidade: **User**
-   Tabela **addresses**: esta com o nome da sua entidade: **Address**
-   Tabela **categories**: esta com o nome da sua entidade: **Category**
-   Tabela **real_estate**:esta com o nome da sua entidade: **RealEstate**
-   Tabela **schedules**: esta com o nome da sua entidade: **Schedule**

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuários                           | Apenas Admnistradores                  |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Apenas Admnistradores ou dono da conta |
| DELETE | /users/:id                 | Realiza um soft delete no usuário                 | Apenas Admnistradores                  |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /categories                | Criação de categoria                              | Apenas Admnistradores                  |
| GET    | /categories                | Lista todas as categorias                         | Qualquer usuário, não necessita token  |
| GET    | /categories/:id/realEstate | Lista todos imóveis que pertencem a uma categoria | Qualquer usuário, não necessita token  |
| POST   | /realEstate                | Criação de um imóvel                              | Apenas Admnistradores                  |
| GET    | /realEstate                | Lista todos os imóveis                            | Qualquer usuário, não necessita token  |
| POST   | /schedules                 | Agenda uma visita a um imóvel                     | Qualquer usuário, obrigatório token    |
| GET    | /schedules/realEstate/:id  | lista todos os agendamentos de um imóvel          | Apenas Admnistradores                  |

### POST - /users
-   Rota para criação de usuário com os seguintes dados:
    -   **id*;
    -   **name**;
    -   **email**;
    -   **password**;
    -   **admin**;
    -   **createdAt**;
    -   **updatedAt**;
    -   **deletedAt**.
    -   
-   A rota **não precisa de autenticação** para ser acessada.
-   
### GET - /users

-   A rota retorna todos os dados dos usuários, com exceção da hash de senha;
-   A rota pode ser acessada apenas por usuários administradores.

### PATCH - /users/:id

-   Não é possível atualizar os campos **id** e **admin**;
-   Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.

### DELETE - /users/:id

-   A rota realiza um soft delete do usuário;
-   A rota pode ser acessada apenas por administradores;
-   Não é possível realizar um soft delete em um usuário já deletado.

### POST - /login

-   Rota de login recebendo **email** e **password**;
-   O login valida se o usuário existe e valida se a senha está correta;
-   Não é possível realizar o login de um usuário marcado como deletado;
-   A rota **não precisa de autenticação** para ser acessada.

### POST - /categories

-   Não podem ser cadastradas duas categorias com o mesmo nome.
-   A rota pode ser acessada apenas por usuários administradores.

### GET - /categories

-   A Rota lista todas as categorias.
-   A rota não precisa de autenticação para ser acessada

### GET - /categories/:id/realEstate

-   A Rota lista todos os imóveis que pertencem a uma categoria.
-   A rota não precisa de autenticação para ser acessada.

### POST - /realEstate

    -   **id**;
    -   **value**;
    -   **size**;
    -   **address**{
        -   **street**;
        -   **zipCode**;
        -   **number**;
        -   **city**;
        -   **state**;
        }
    -   **categoryId**;
    -   **sold**;
    -   **createdAt**;
    -   **updatedAt**;
-   Não podem ser cadastrados dois imóveis com o mesmo endereço.
-   A rota pode ser acessada apenas por administradores.

### GET - /realEstate

A Rota lista todos os imóveis.
A rota não precisa de autenticação para ser acessada.

### POST - /schedules

    -   **id**;
    -   **date**;
    -   **hour**;
    -   **realEstateId**;
    -   **userId**;
    
-   Não é possível agendar uma visita a um imóvel com a mesma data e hora;
-   Não é possível o mesmo **usuário** agendar uma visita a 2 imóveis diferentes com a mesma data e hora;
-   Só é possível agendar uma visita durante horário comercial (08:00 as 18:00).
-   Só é possível agendar uma visita durante dias úteis (segunda à sexta).
-   A rota é acessada tanto por usuários comuns quanto administradores.

### GET - /schedules/realEstate/:id

-   A Rota lista todos os agendamentos de um imóvel.
-   A rota é acessada apenas por administradores.
