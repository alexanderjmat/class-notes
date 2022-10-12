const express = require('express');

const app = express();

app.get('/', (request, response) => {
    console.log("Hello!")
    response.send('<h1>Hello</h1>')
})

app.get('/animal', (request, response) => {
    response.send('<h2>I am an animal</h2>')
})

app.post('/test', (request, response) => {
    response.send('testing testing 123')
})






app.listen(3000, function() {
    console.log('App on port 3000')
})