require('./DB_connection.js')
const server = require('./app.js');
const PORT = 3001;
const {conn} = require('./DB_connection.js')

try {
    server.listen(PORT, async () => {
        console.log("Server raised in port: " + PORT)
        await conn.sync({force: false})
    })
} catch (error) {
    console.log(error);
}

// server.listen(PORT, () => {
//     console.log("Server raised in port: " + PORT)
// })

// http.createServer((req, res) => {
//     const { url } = req;
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(url.includes(`/rickandmorty/character`)) {
//         const id = Number(url.split('/').pop());
//         getCharById(res, id)
//     } 
 

// }).listen(3001, "localhost")