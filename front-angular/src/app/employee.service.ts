/**
 * arquivo: app/employee.service.ts
 * descricao: arquivo responsavel por realizar as transações de request entre o back node.js e front angular.
 * autor: Lais Coutinho <laisdev - Linkedin>
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:3000/api'; // porta do back - vai se comunicar pra la - vindo do meu back-end

  constructor(private http: HttpClient) {

   }

   //metodo responsavel por criar um novo employee
   createNewEmployee(name: string, job_role: string, salary: number, birth: Date, employee_registration: number) {
    const employee = {
      name,
      job_role,
      salary,
      birth,
      employee_registration
    }
    console.log(employee)

    //POST - url no back-end - localhost:3000/api/employees
    this
      .http
      .post(`${this.uri}/employees`, employee)
      .subscribe(res => console.log('Done'));
   }
}
