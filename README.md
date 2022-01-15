# PROYECTO Backend-Aprendeconrrhh:books:

## :feet:Autor: Daniel Moreno  :calendar:Fecha: 14/01/2022

## ¿En que consiste el proyecto?

El proyecto se realiza mediante Express, Sequelize, Mysql y jwt, creando con estas tecnologias una API sobre servicios que puedes contratar registrandote y logeandote como usuario, donde podrás ver los diferentes servicios y poder contratarlos.
Para las comprobaciones del correcto funcionamiento de la API, se ha utilizado VSC y POSTMAN:runner:.

![image](https://user-images.githubusercontent.com/90707206/149600351-39484e99-c0cc-458d-82b8-6a894e568321.png)


En esta API se pueden consultar los usuarios registrados, los servicios a contratar, ver los pedidor creados y loggearse como usuario, ya que este ultimo es necesario para poder consultar las librerias por la introduccion de JWT en este proyecto:closed_lock_with_key:.

![image](https://user-images.githubusercontent.com/90707206/149602043-13149dac-b7b4-4458-84bf-bec9ae161ebc.png)

El proyecto esta desplegado en Heroku, aqui teneis el enlace: https://aprendeconrrhh.herokuapp.com/ :boom:

# Express API Sequelize + Mysql + jwt

## COMANDOS BÁSICOS
<br>

![image](https://user-images.githubusercontent.com/16636086/138780246-dc69ba86-c111-42e6-8079-35ffeba723f9.png)


```
npm init
npm install
npm update
npm run dev
npm run start

npm install cors jsonwebtoken bcrypt
sequelize model:generate --name user --attributes name:string, password:string, email:string
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all
```

## END-POINTS

```

#### Register
POST - localhost:3000/api/signup - { "name": "root", "email": "root@email.com",  "password": "password" }

#### Login
POST - localhost:3000/api/signin - { "email": "root@email.com",  "password": "password" }

#### Home
GET - localhost:3000

#### Movies
GET - localhost:3000/movies
GET - localhost:3000/movies/:id
GET - localhost:3000/movies/name/:title
POST - localhost:3000/movies
PUT - localhost:3000/movies:id
DELETE - localhost:3000/movies
DELETE - localhost:3000/movies:id

#### Categories
GET - localhost:3000/categories
GET - localhost:3000/categories/:id
GET - localhost:3000/categories/name/:title
POST - localhost:3000/categories
PUT - localhost:3000/categories:id
DELETE - localhost:3000/categories
DELETE - localhost:3000/categories:id
```
