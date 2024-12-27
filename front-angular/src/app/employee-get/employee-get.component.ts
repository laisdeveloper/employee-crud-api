import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import Employee from '../Employee';
import { EmployeeService } from '../employee.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-get',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './employee-get.component.html',
  styleUrl: './employee-get.component.css'
})
export class EmployeeGetComponent {
  employees: Employee[] = [];

  icons = {
    faEdit: faEdit,
    faTrash: faTrash,
  }

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  identify(index: number, item: Employee) {
    return item.employee_id
  }
}
