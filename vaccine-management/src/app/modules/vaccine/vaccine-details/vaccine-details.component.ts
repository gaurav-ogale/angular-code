import { Vaccine } from './../../../models/vaccine.model';
import { Patient } from 'src/app/models/patient.model';
import { Component, Input, OnInit } from '@angular/core';
import { PatientData } from 'src/app/models/patientdata.model';

@Component({
  selector: 'app-vaccine-details',
  templateUrl: './vaccine-details.component.html',
  styleUrls: ['./vaccine-details.component.css'],
})
export class VaccineDetailsComponent implements OnInit {
  patientDetails: PatientData[] = [];
  @Input() patients: Patient[];
  @Input() vaccines: Vaccine[];
  constructor() {}

  patientData: PatientData;
  ngOnInit(): void {
    this.getPatientDetails();
  }
  fields = ['name', 'age', 'vaccine', 'due date', 'Vaccination Date', 'brand'];

  getPatientDetails() {
    for (let patient of this.patients) {
      for (let vaccine of this.vaccines) {
        if (patient.name == vaccine.name) {
          let age = this.getAge(patient.dob);
          let dueDate = this.getDueDate(vaccine.vaccineDate, vaccine.vaccine);
          let patientDetails = new PatientData(
            patient.name,
            age,
            vaccine.vaccine,
            dueDate,
            vaccine.vaccineDate,
            vaccine.brand
          );
          this.patientDetails.push(patientDetails);
        }
      }
    }
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getDueDate(dateString, dose) {
    console.log(dose);
    if (dose === 'first') {
      var targetDate = new Date(dateString);
      targetDate.setDate(targetDate.getDate() + 45);
      var dd = targetDate.getDate();
      var mm = targetDate.getMonth() + 1;
      var yyyy = targetDate.getFullYear();
      var dueDate = yyyy + '-' + dd + '-' + mm;

      return dueDate;
  }else{
    return "Fully Vaccinated"
  }
}
}
