import { createServer } from 'http';

const hostname = 'localhost';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World');
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at Server running at http://${hostname}:${port}/`)
});