import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor(private patientService : PatientService) {
  }

  patients : Patient[];
  patientFields=["id","name","dob","gender","weight","height","bloodGroup"];
  ngOnInit(): void {
     this.patientService.getPatientData().subscribe(data =>{
        this.patients=data
      }
    );
  }

}
