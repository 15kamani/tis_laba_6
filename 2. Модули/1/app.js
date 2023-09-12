const http = require('http');
const greeting = require('./greeting');

http.createServer(function (request, response) {
    response.end('Hello NodeJS!');
}).listen(3000, '127.0.0.1', function () {
    console.log(
        'Сервер начал прослушивание запросов на порту 3000'
    );
});