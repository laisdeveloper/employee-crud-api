import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: EmployeeGetComponent }, // Página inicial (ajustado para um componente de lista)
  { path: 'employee/create', component: EmployeeAddComponent },
  { path: 'employees/:id', component: EmployeeEditComponent },
  { path: 'employees', component: EmployeeGetComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [RouterModule
  ],
  declarations: [] // Não precisa declarar os componentes standalone aqui
})
export class AppRoutingModule { }
