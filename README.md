# back-newpaper

This is an API written in node.js that displays articles from the "newpaper" project about the exploits of Hercules.
This allowed me to :

- to connect the API to MongoDB through the Mongoose library
- to create a Router with Express
- to make a CRUD for the articles

## Stack

NODE.js

- Express
- Mongoose
- MongoDB
- Bcrypt

## Install the API

First clone the repo => git clone <repo_name>
Build your own .env, all the information you need to copy and paste into your .env is in the .env.example
After installing MongoDB, create a database under MongoDB => create database and insert the data from the data.js file.
Install all NPM and npm packages you need for this project => npm i
To start the API => npm start
Go to your broswer at [http://localhost:<PORT_you_are_in_your_.env>/v1]

This API is to be associated with the newpaper project: [https://github.com/LauraGrenier93/newpaper]

## Test the API: To test it you can use Postman or Insomnia

|description | request | adress | body (x-www-form-urlencoded)|
|--|--|--|--|
| display all items | GET | [http://localhost:8080/] |
| display one item | GET | [http://localhost:8080/{id}] |
| add item | POST | [http://localhost:8080/] | title (un titre),<br>description (une description),<br>imageUrl (../media/hydre.jpg),<br>imageAlt (illustration de l'hydre de Lerne)|
|modify one item | PUT | [http://localhost:8080/{id}] | imageUrl (/media/lion.jpg)|
|delete one item| PUT | [http://localhost:8080/{id}] |
