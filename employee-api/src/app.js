/**
 * arquivo: app.js
 * descricao: arquivo responsavel por fazer a conexao com o arquivo server.js
 * autor: Lais Coutinho <laisdev - Linkedin>
 */

const express = require('express')
const cors = require('cors')

const app = express()

// Rotas da API
const index = require('./routes/index')
const employeeRoute = require('./routes/employee.routes')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', employeeRoute)

module.exports = app