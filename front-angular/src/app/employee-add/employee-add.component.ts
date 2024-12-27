import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, HttpClientModule  ],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  providers: [EmployeeService]
})

export class EmployeeAddComponent implements OnInit {

  icons = {
    faUserPlus,
    faUserEdit
  };

  employeeForm!: FormGroup;
  employee_id?: number; // Declarando como opcional

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) {
    this.createForm();
  }

  createForm(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      job_role: ['', Validators.required],
      salary: ['', Validators.required],
      birth: ['', Validators.required],
      employee_registration: ['', Validators.required],
    });
  }

  // metodo responsavel por adicionar um novo employee - acao do botao
  createNewEmployee(name: string, job_role: string, salary: number, birth: Date, employee_registration: number){
    this.employeeService.createNewEmployee(name, job_role, salary, birth, employee_registration);

    Swal.fire({
      title: 'Employee added sucessfully!',
      icon: 'success',
      showConfirmButton: true,
      timer: 1500
    });

    this.employeeForm.reset();
  }

  ngOnInit(): void {
    this.checkParam();
  }

  checkParam() {}

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;

      if (!this.employee_id) {
        console.log('Creating new employee...', formData);
        this.employeeService.createNewEmployee(
          formData.name,
          formData.job_role,
          formData.salary,
          formData.birth,
          formData.employee_registration
        );
      } else {
        console.log('Updating employee...', formData);
        // Adicione lógica para atualizar funcionário aqui
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
