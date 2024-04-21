// const data = require("./utils/data");
// const http = require("http");
// const {getCharById} = require('./controllers/getCharById')
const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index')
const morgan = require('morgan')

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(morgan("dev"))
 server.use(express.json());
 server.use('/rickandmorty', router)

server.listen(PORT, () => {
    
})

// http.createServer((req, res) => {
//     const { url } = req;
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(url.includes(`/rickandmorty/character`)) {
//         const id = Number(url.split('/').pop());
//         getCharById(res, id)
//     } 
 

// }).listen(3001, "localhost")