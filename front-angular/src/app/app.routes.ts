import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { faUserPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

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
  declarations: []
})

export class AppRoutingModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUserPlus, faTrash, faEdit);
  }
 }
