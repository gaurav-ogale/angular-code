import { Patient } from 'src/app/models/patient.model';
import { Vaccine } from './../models/vaccine.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class AddVaccineService {

  URL :string;
  constructor(private httpClient : HttpClient, private patientService : PatientService) {
    this.URL = environment.API_URL;
    console.log(this.URL);
  }
  vaccines : Vaccine[];

  patients : Patient[];

  givenAt =[];
  patientData : {
    name : string,
    age : number,
    vaccine : string,
    dueDate : string,
    vaccineDate : string,
    brand : string
  };

  patientsData :any[];

  getPatientData(){
    this.patientService.getPatientData().subscribe(data =>{
       this.patients=data
    });
    return this.patientsData;
  }

  getPatientVaccineData(){
    return this.httpClient.get<Vaccine[]>(`${this.URL}/vaccine`);

  }

  addVaccineDetails(vaccine : Vaccine){
   return  this.httpClient.post(`${this.URL}/vaccine`,vaccine);
  }

  getGivenAtData(){
    this.getPatientVaccineData().subscribe(data =>{
      data.forEach(p=>{
        this.givenAt.push(p.hospital);
      })
    })
    return this.givenAt;
  }
}
