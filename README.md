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

![image](https://user-images.githubusercontent.com/91347602/233141370-d18bfc4a-7662-4ecc-9c1a-ed952ff3dfb9.png)

Seu retorno deve apresentar um 201 da seguinte forma:

![image](https://user-images.githubusercontent.com/91347602/233133044-a9df73cb-5b79-47d9-990d-bf9d35c12962.png)

---

### 2 - GET - Tarefas - Deve enviar em seu Headers o paramentro username já cadastrado:

![image](https://user-images.githubusercontent.com/91347602/233141723-89703be4-1865-48e0-bfd7-2b3f9c30c5c8.png)

Seu retorno deve apresentar um 201 da seguinte forma:

![image](https://user-images.githubusercontent.com/91347602/233142016-6b0360ae-41e2-4d85-9dfe-1ee852c1d24d.png)

---

### 3 - POST - Adicionar Tarefa - Deve enviar em seu Headers o paramentro username já cadastrado mais 2 paramentos no JSON:

![image](https://user-images.githubusercontent.com/91347602/233142918-8faa9627-6186-45f8-ac40-8803653316c7.png)




