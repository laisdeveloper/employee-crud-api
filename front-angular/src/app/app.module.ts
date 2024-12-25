import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component'
import { EmployeeAddComponent } from './employee-add/employee-add.component'
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeGetComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



