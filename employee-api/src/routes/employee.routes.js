/**
 * arquivo: routes/employee
 * descricao: arquivo responsavel pelas rotas da API
 * autor: Lais Coutinho <laisdev - Linkedin>
 */

const router = require('express-promise-router')()
const employeeController = require('../controllers/employee.controller')

// definindo rotas do CRUD

// rota para criar novo colaborador : POST : localhost:3000/api/employee
router.post('/employees', employeeController.createEmployee)

module.exports = router