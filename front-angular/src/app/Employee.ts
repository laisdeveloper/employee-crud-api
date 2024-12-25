/**
 * Esse projeto usa Typescript ;)
 */

/**
 * arquivo: app/employee.ts
 * descricao: arquivo responsavel por representar a classe Employee no front
 * autor: Lais Coutinho <laisdev - Linkedin>
 */

export default class Employee {
  employee_id?: number; // Declarando como opcional
  name: string;
  job_role: string;
  salary: number;
  birth: Date;
  employee_registration: number;

  constructor(name: string, job_role: string, salary: number, birth: Date, employee_registration: number) {
    this.name = name;
    this.job_role = job_role;
    this.salary = salary;
    this.birth = birth;
    this.employee_registration = employee_registration;
  }
}
