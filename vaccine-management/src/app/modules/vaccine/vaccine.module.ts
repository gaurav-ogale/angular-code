import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleVaccineComponent } from './schedule-vaccine/schedule-vaccine.component';
import { RouterModule, Routes } from '@angular/router';
import { VaccineComponent } from './vaccine.component';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


export const APP_ROUTES : Routes=[{
  path :"",
  component :VaccineComponent
}]

@NgModule({
  declarations: [ScheduleVaccineComponent, VaccineComponent, VaccineDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VaccineModule { }
