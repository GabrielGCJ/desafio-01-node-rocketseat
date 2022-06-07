const { response } = require('express');
const { request } = require('express');
const express = require('express');
const { v4: uuidv4 } = require("uuid") 

const app = express();
app.use(express.json());
app.listen(3333);

const users = [];

const checksExistsUserAccount = (request, response, next) => {
  const { id } = request.headers
  const user = users.find(user => user.id === id)

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

app.get('/todos',(request, response) => {
  const { username } = request.headers
  const user = users.find(user => user.username === username)

  if(!user){return response.status(300).send("Usuario não cadastrado")}

  return response.status(201).send(user)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {

  const { title ,deadline } = request.body

  const {user} = request

  const todoOperation = {
    id: uuidv4(),
    title,
    done: false,
    deadline,
    created_at: new Date()
  }
  user.todos.push(todoOperation)

  return response.status(201).send("Tarefa Adicionada com sucesso...")
});


app.put('/todos/:id', (request, response) => {
  const { username } = request.headers
  const { id } = request.params
  const user = users.find(user => user.username === username)
  const { title , deadline } = request.body


  if(!user){return response.status(300).send("Usuario não encontrado")}   

  const todo = user.todos.find(todo => todo.id === id)

  if(!todo){ return response.status(330).send("To do não está chegando") }

  todo.title = title
  todo.deadline = deadline

  if (todo){ return response.status(201).send(todo) }
});

app.patch('/todos/:id', (request, response) => {
  const { username } = request.headers
  const { id } = request.params
  const user = users.find(user => user.username === username)

  if(!user){return response.status(300).send("Usuario não encontrado")}   

  const todo = user.todos.find(todo => todo.id === id)

  if(!todo){ return response.status(330).send("To do não está chegando") }

  todo.done = true  

  if (todo){ return response.status(201).send(todo) }
});

app.delete('/todos/:id', (request, response) => {
  const { username } = request.headers
  const { id } = request.params
  const user = users.find(user => user.username === username)

  if(!user){return response.status(300).send("Usuario não encontrado")}   

  const todo = user.todos.find(todo => todo.id === id)

  user.todos.splice(id, 1)

  if (todo){ return response.status(201).send("Tarefa Retirada") }
    
});
