import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  URL :string;
  constructor(private http : HttpClient) {
    this.URL = environment.API_URL;
    console.log(this.URL);
  }

  authTrue : Boolean = false;
  patients : Patient[];
  getPatientData(){
    console.log(`${this.URL}/patient`);
    return this.http.get<Patient[]>(`${this.URL}/patient`);
  }

  addNewPatient(patient : Patient){
    return this.http.post(`${this.URL}/patient`,patient);
  }
  canPatientAccessVaccine(name : string){
    console.log(name);
    this.getPatientData().subscribe({
      next : data =>{this.patients=data},
      error : err =>{},
      complete :()=>{this.setAuth(this.patients,name)}
     }

    )
  }

  setAuth(patients : Patient[], name){
    patients.forEach(data =>{
      if(data.name ===name ){
        this.authTrue = true;
      }
    })
  }

  authUser(){
   return this.authTrue ? true : false;
  }
}
