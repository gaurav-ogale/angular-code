import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { PatientComponent } from './patient.component';

export const APP_ROUTES : Routes=[{
  path :"",
  component :NewPatientComponent,
}]

@NgModule({
  declarations: [NewPatientComponent, RegisterPatientComponent, PatientDetailsComponent, PatientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
