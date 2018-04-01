
# Minutrade & Pedro Olímpio

### Technical features:

* [Angular CLI](https://cli.angular.io/): 1.7.3
* [Angular](https://cli.angular.io/): 5.2.9
* [Node.JS](https://nodejs.org): 9.6.0
* [MongoDB](https://www.mongodb.com/): 3.6.3
___
# How to use

First of all you need to download the `Angular CLI`, `Node.JS` and `MongoDB`. At the moment of this publishment the latest version of this components are the related above.

The project contains 2 directories `api` and `dashboard`. After you download the project is necessary download the dependencies of this project. So you need to go to `api`  directory and execute the following command:

`npm install`

Repeat the same action above inside the `dashboard` directory.

After download all dependencies of the project is just to start the project using the command `npm start`. Execute this command at the `api` directory and then `dashboard` directory as well.

You can access the `dashboard` using this URL: `http://localhost:4200`.

if you want to consume the `api` outside dashboard, you can use you can use this URL: `http://localhost:12345` and the PATHs discribed bellow:

<i> /clients </i> | Method: GET -> Get all clients
<i> /client/:cpf </i> | Method: GET -> Get a single client by CPF
<i> /client </i> | Method: PUT -> Add a new client (JSON Body)
<i> /client </i> | Method: POST -> Update an existing client
<i> /client/:cpf </i> | Method: DELETE -> Delete an existing client by CPF
<i> /client/search/:name </i> | Method: GET -> Search by partial name or a full name (Example: Pedro Henrique Olímpio or Olímpio)

At the root directory contains the directory [postman](getpostman.com). This directory a collections file you can use to test the API outside dashboard as well. 

At the root directory contains the directory `printscreens`. This directory contains a the printscreens how the dashboard will be shows up for you.

Best Regards,
Pedro Henrique Olímpio
