import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule ],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})

export class EmployeeAddComponent implements OnInit {

  icons = {
    faUserPlus,
    faUserEdit
  };

  employeeForm: FormGroup;
  employee_id?: number; // Declarando como opcional

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      job_role: ['', Validators.required],
      salary: ['', Validators.required],
      birth: ['', Validators.required],
      employee_registration: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.checkParam();
  }

  checkParam() {

  }

  onSubmit() {
    if (!this.employee_id) {
      console.log('Create new employee');
      // Lógica para criar novo empregado
    } else {
      console.log('Update employee');
      // Lógica para atualizar empregado
    }
  }
}
