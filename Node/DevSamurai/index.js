const express = require('express');
const server = express();

//http://localhost:3000/hello?name=Cix&age=28
// Query parameters = ?name=Cix&age=28

// http://localhost:3000/hello/Cix
// Route parameters = /users/:name
// Body parameters = { "name": "Cix", "age": 28 }


server.get('/hello', (req, res) => {
  res.json({
    title: 'Hello World!',
    message: 'This is a simple Express server response.'
  });
});

server.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
