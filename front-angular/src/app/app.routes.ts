import { Routes } from '@angular/router';

import { EmployeeAddComponent } from './employee-add/employee-add.component'
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'
import { EmployeeGetComponent } from './employee-get/employee-get.component'

export const routes: Routes = [
  { path: 'employee/create', component: EmployeeAddComponent }, //localhost:4200/employee/create
  { path: 'employee/:id', component: EmployeeEditComponent },
  { path: 'employee', component: EmployeeGetComponent }
];
