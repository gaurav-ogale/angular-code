import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  @Output() noteSelectEvent = new EventEmitter<any>()

  constructor(private formBuilder : FormBuilder, private patientService : PatientService, private router : Router) {
    this.authForm=this.formBuilder.group({
      name : this.name
    })
   }

  ngOnInit(): void {
  }

  validateUser(){
    console.log(this.name);
    this.patientService.canPatientAccessVaccine(this.name.value);
    this.noteSelectEvent.emit("hello");
    this.router.navigate(["/"]);

  }
  authForm: FormGroup;

  name = new FormControl('', Validators.required);

}
