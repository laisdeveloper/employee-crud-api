/**
 * arquivo: routes/index.js
 * descricao: arquivo responsavel pela chamada da api da aplicação  no lado do back end
 * autor: Lais Coutinho <laisdev - Linkedin>
 */

const express = require('express')
const router = express.Router()

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo a API Node.js + Postgresql',
        version: '1.0.0'
    })
})

module.exports = router