# Anotações

## Tipos de requisição

- **GET** &#8594; Buscar uma informação.
- **POST** &#8594; Inserir ou criar uma informação.
- **PUT** &#8594; Alterar uma informação.
- **DELETE** &#8594; Remover uma informação.
- **PATCH** &#8594; Alterar uma informação específica.

---

## Tipos de parâmetros

- **Routes Params** &#8594; _`http://localhost:8080/produtos/1234`_
- **Query Params** &#8594; _`http://localhost:8080/produtos?name=teclado&description=tecladobom&...`_
- **Body Params** &#8594;
  ```
  {
  "name" : "teclado",
  "description" : "teclado bom"
  }
  ```

---

## Banco de dados

### Opções

- Driver do banco de dados
- Query Builders &#8594; **Knex.js**
- Object-Relational Mapping (ORM) &#8594; **Sequelize, TypeORM, Prisma**

### Conceitos

- **Migrations** : Controle de
  versionamento de tabelas dentro da aplicação. "GitHub" do banco de dados.

---

### _<center> &#8594; server &#8594; controller &#8594; service &#8594; repositories &#8594; BD</center>_

- **Entity** : Pode-se referenciar como sendo umatabela. Entidade "Usuário" = Tabela "Usuário"
- **Repository** : É toda camada que faz a comunicaçãoentre a entidade e o banco de dados. Ele faz a busca,a criação, a remoção, entre outros. Ou seja, ele seráresponsável por ter os métodos que irão fazer essamanipulação com o banco de dados.
- **Service** : Camada que irá tratar as regras daaplicação, antes de passar para os repositórios. Exemplo utilizado na aula #2 :

  ### **Regras**

  - _Cadastro de usuário_

    [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

    [ x ] Não é permitido cadastrar usuário sem e-mail

  - _Cadastro de TAG_

    [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome

    [ ] Não é permitido cadastrar tag sem nome

    [ ] Não é permitido o cadastro por usuários que não sejam administradores

  - _Cadastro de elogios_

    [ ] Não é permitido um usuário cadastrar um elogio para si

    [ ] Não é permitido cadastrar elogios para usuários inválidos

    [ ] O usuário precisa estar autenticado na aplicação

- **Controller** : Basicamente irá pegar a informação do server, e repassar para o service. É onde irá ficar o Request e Response.

---
