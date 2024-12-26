import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import ptBr from '@angular/common/locales/br';
import { registerLocaleData } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(ptBr, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    CommonModule,
    ReactiveFormsModule,
    HttpClient,
    HttpClientModule,
    provideHttpClient(withFetch()),
    { provide: EmployeeService },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
