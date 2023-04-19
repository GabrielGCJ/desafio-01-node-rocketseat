# Desafio 1 (Desafio 01: Chapter I)
Este é o primeiro chapter do Desafio 01 da Rocket Ignite, um programa de capacitação intensiva em desenvolvimento de software.

![image](https://user-images.githubusercontent.com/91347602/232902040-1eb12147-f163-4dd8-bf03-0d2cd96cefb7.png)



### Objetivo:

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

### https://www.postman.com/downloads/

### https://insomnia.rest/download

---
A API implementada durante este chapter possui os seguintes endpoints:

![image](https://user-images.githubusercontent.com/91347602/233130037-144c6352-b522-4e07-8566-c2f9f7c8e6ba.png)

Cada endpont é representado deve enviar um conjunto de parametros para funcionar corretamente.

---

### 1 - POST - Cadastro de Usuario - Deve enviar em seu json 2 paramentros:

- name
- username

![image](https://user-images.githubusercontent.com/91347602/233131667-d7ca478f-046d-4ea2-9fb2-f9404f0f2cc6.png)

Seu retorno deve apresentar um 201 da seguinte forma:

![image](https://user-images.githubusercontent.com/91347602/233133044-a9df73cb-5b79-47d9-990d-bf9d35c12962.png)

---

### 1 - GET - Tarefas - Deve enviar em seu Headers um paramentro com um username cadastrado:




