
// Requisitando o pack express e o atribui em uma constante express
const express = require("express")
// Executa a função express e a atribui em uma nova constante chamada server
const server = express()
// realiza a importação do arquivo routes.js usando module.exports
const routes = require("./routes")

// usando template engine
server.set('view engine', 'ejs')

// habilita arquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))