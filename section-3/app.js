
const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);
console.log(routes.someText);
console.log('SERVER STARTED');
server.listen(3000);