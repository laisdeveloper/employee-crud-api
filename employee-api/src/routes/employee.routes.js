/**
 * arquivo: routes/employee
 * descricao: arquivo responsavel pelas rotas da API
 * autor: Lais Coutinho <laisdev - Linkedin>
 */

const router = require('express-promise-router')()
const employeeController = require('../controllers/employee.controller')

// definindo rotas do CRUD

// rota para criar novo colaborador : POST : localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee)

//rota responsavel por listar todos os colaboradores : GET : localhost:300/api/employees
router.get('/employees', employeeController.listAllEmployees)

// rota repsonsavel pór lista um determinado colavorador por id : GET : localhost:300/api/employees/id
router.get('/employees/:id', employeeController.findEmployeeByID)

module.exports = router