import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { Vaccine } from 'src/app/models/vaccine.model';
import { AddVaccineService } from 'src/app/services/add-vaccine.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

  patients : Patient[];
  vaccines : Vaccine[];

  constructor(private addVaccine : AddVaccineService, private patientServ : PatientService) {
    this.patientServ.getPatientData().subscribe( data =>{
      this.patients=data;
      //console.log(this.patients);
     });

     this.addVaccine.getPatientVaccineData().subscribe(data=>{
       this.vaccines=data;
       //console.log(this.vaccines);
     });
  }

  ngOnInit(): void {
  }



  showScheduleVaccine : boolean = false;
  showVaccineDetails : boolean = false;

}
