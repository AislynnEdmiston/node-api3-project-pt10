const express = require("express");


const server = express()
const port = 4000

server.use(express.json());

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})