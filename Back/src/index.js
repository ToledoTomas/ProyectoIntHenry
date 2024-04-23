const server = require('./app.js');
const PORT = 3001;


server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT)
})

// http.createServer((req, res) => {
//     const { url } = req;
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(url.includes(`/rickandmorty/character`)) {
//         const id = Number(url.split('/').pop());
//         getCharById(res, id)
//     } 
 

// }).listen(3001, "localhost")