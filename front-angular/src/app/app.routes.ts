import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeAddComponent } from './employee-add/employee-add.component'
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'
import { EmployeeGetComponent } from './employee-get/employee-get.component'

import { AppComponent } from './app.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/employees', pathMatch: 'full'},
  { path: '', component: AppComponent },
  { path: 'employee/create', component: EmployeeAddComponent },
  { path: 'employees/:id', component: EmployeeEditComponent },
  { path: 'employees', component: EmployeeGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
