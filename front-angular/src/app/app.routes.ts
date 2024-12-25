import { Routes } from '@angular/router';

import { EmployeeAddComponent } from './employee-add/employee-add.component'
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'
import { EmployeeGetComponent } from './employee-get/employee-get.component'

import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'employee/create', component: EmployeeAddComponent }, //localhost:4200/employee/create
  { path: 'employee/:id', component: EmployeeEditComponent },
  { path: 'employee', component: EmployeeGetComponent }
];
