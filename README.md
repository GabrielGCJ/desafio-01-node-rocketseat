# Desafio 1 (Desafio 01: Chapter I)

![image](https://user-images.githubusercontent.com/91347602/232902040-1eb12147-f163-4dd8-bf03-0d2cd96cefb7.png)

Este é o primeiro chapter do Desafio 01 da Rocket Ignite, um programa de capacitação intensiva em desenvolvimento de software.

Objetivo:

- O objetivo deste chapter é implementar uma API RESTful em Node.js e TypeScript para gerenciamento de tarefas (to-do list).

---

### Para rodar o projeto:

Clone este repositório em sua máquina:

`git clone https://github.com/GabrielGCJ/desafio-1-rocketseat.git`

Entre na pasta do projeto:

`cd desafio-1-rocketseat`

Instale o projeto:

`yarn install`

Rode o projeto:

`yarn dev`

Acesse o endereço localhost porta 3333 em seu navegador ou ferramenta de testes para interagir com a API:

http://localhost:3333

---

### Para testar as utilidades da API é importante o uso de uma aplicação de API Client como Postman ou Insomnia.

![image](https://user-images.githubusercontent.com/91347602/232907354-81bfa735-8b77-45b0-a624-9964122a11bc.png)

<h3 align-items: "center" >https://www.postman.com/downloads/    https://www.postman.com/downloads/</h3>

https://www.postman.com/downloads/

https://insomnia.rest/download
<center>

[Este é um texto de exemplo para demonstrar como centralizar um texto em um README.md.](https://www.postman.com/downloads/

https://insomnia.rest/download
<center>)

</center>

---

A API implementada durante este chapter possui os seguintes endpoints:

- GET `/tasks`: lista todas as tarefas cadastradas
- GET `/tasks/:id`: retorna os detalhes de uma tarefa específica
- POST `/tasks`: cria uma nova tarefa
- PUT `/tasks/:id`: atualiza uma tarefa existente
- DELETE `/tasks/:id`: exclui uma tarefa existente
