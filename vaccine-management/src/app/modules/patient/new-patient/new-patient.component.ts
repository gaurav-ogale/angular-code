import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css'],
})
export class NewPatientComponent implements OnInit {

  ngOnInit(): void {}

  showRegistrationForm : boolean = false;
  showPatientData :boolean=false;

  showPatientLogin :boolean = false;

  showPatientDiv: boolean = true;

  setShowPatient(str : string){
    console.log(this.showPatientLogin + "" + str);
    this.showPatientDiv=false;
    console.log(this.showPatientDiv + "" + str);
  }


}
