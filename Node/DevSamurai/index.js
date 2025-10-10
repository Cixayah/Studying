const express = require('express');
const server = express();

//http://localhost:3000/hello?name=Cix&age=28
// Query parameters = ?name=Cix&age=28

server.get('/hello', (req, res) => {
  const { name, age } = req.query;
  //para criar uma constante com mais de um valor, usar desestruturação
  // const { name, age } = req.query;
  // console.log(name, age);

  res.json({
    title: 'Welcome to JSON with Node.js!',
    message: `Hello ${name}, you have ${age} years, welcome to our API!`,
  });
});
// http://localhost:3000/hello/Cix
// Route parameters = /users/:name
// Body parameters = { "name": "Cix", "age": 28 }

server.get('/hello/:name', (req, res) => {
  const name = req.params.name;

  res.json({
    title: 'Welcome to JSON with Node.js!',
    message: `Hello ${name}, welcome to our API!`,
  });
});


server.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
