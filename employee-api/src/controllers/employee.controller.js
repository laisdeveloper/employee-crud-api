/**
 * arquivo: controllers/employee
 * descricao: arquivo responsavel pela logica do CRUD (API - Employee)
 * autor: Lais Coutinho <laisdev - Linkedin>
 */

const db = require("../config/database")

// metodo que cria um novo employee
exports.createEmployee = async (req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body;
    const { rows } = await db.query(
        "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
        [name, job_role, salary, birth, employee_registration]
      )
      
      res.status(201).send({
        message: "Employee added successfully!",
        body: {
          employee: { name, job_role, salary, birth, employee_registration },
        },
      })
}

//me todo que lista todos os employees
exports.listAllEmployees = async(rewq, res) => {
    const response = await db.query('SELECT * FROM employee ORDER BY name ASC')
    res.status(200).send(response.rows)
}

//metodo que lista determiando employee por if
exports.findEmployeeByID = async(req, res) => {
    const employeeID = req.params.id // transforma porque pode vir de um body json
    const response = await db.query('SELECT * FROM employee WHERE employee_id = $1', [employeeID]) //await porque esta esperando uma query
    // o $1 serve para armanzena uma variavel dentro do sql
    res.status(200).send(response.rows)
}

//metodo reposnavel por tatulaizar um determinado employee por id
exports.updateEmployeeByID = async(req, res) => {
    const employeeID = req.params.id 
    const { name, job_role, salary, birth, employee_registration } = req.body;

    const response = await db.query(
        'UPDATE employee SET name = $1, job_role = $2, salary = $3, birth = $4, employee_registration = $5 WHERE employee_id = $6',
        [name, job_role, salary, birth, employee_registration, employeeID ]
    )

    res.status(200).send({message: 'Employee Updated sucessfully!'})
}