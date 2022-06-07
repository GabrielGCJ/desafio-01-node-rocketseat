const { response } = require('express');
const { request } = require('express');
const express = require('express')
const { v4: uuidv4 } = require("uuid") 

const app = express();
app.use(express.json());
app.listen(3333);

// const cors = require('cors');
// const app = require('./');
// app.use(cors());
console.log("testando")


const users = [];

const checksExistsUserAccount = (request, response, next) => {
  const { username } = request.headers
  const user = users.find(user => user.username === username)

  request.user = user

  if(!user){return response.status(300).send("Usuario não encontrado")}
  

  return next()
}

app.post('/users', (request, response) => {
  const {name, username} = request.body
  const id = uuidv4()


  const usersAlreadyExists = users.some((customer) => customer.name === name)
  if(usersAlreadyExists === true){return response.status(300).send({mensage:"Usuario já Cadastrado"})}
    
    users.push({
      id,
      name,
      username,
      todos: []
    })    
    return response.status(201).send(users)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  
  const {user} = request
    
  if (user){ return response.status(201).send(user)}
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title , deadline } = request.body
  
  const {user} = request

    const todosOperation ={
        id: uuidv4(),
        title,
        done: false,
        deadline,
        created_at: new Date()
    }


    user.todos.push(todosOperation)

    return response.status(201).send("Item adicionado com sucesso!!!")
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});
