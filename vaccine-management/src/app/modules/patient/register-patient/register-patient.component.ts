import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private router: Router, private patientService : PatientService) {
    this.registrationForm = this.formBuilder.group({
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      weight: this.weight,
      height: this.height,
      bloodGroup: this.bloodGroup,
    });
  }

  patient : Patient;

  registrationForm: FormGroup;
  name = new FormControl('', Validators.required);
  dob = new FormControl('', Validators.required);
  gender = new FormControl();
  height = new FormControl('', [
    Validators.required,
    Validators.min(4),
    Validators.max(8),
  ]);
  weight = new FormControl('', [Validators.required, Validators.min(20)]);
  bloodGroup = new FormControl();

  bloodGroups = ['O+', 'O-', 'AB+', 'AB-', 'B+', 'B-', 'A+', 'A-'];

  ngOnInit(): void {}

  addPatient() {
    const patient : Patient = {
      id : Math.floor((Math.random() * 1000) + 1),
      name : this.name.value,
      dob : this.dob.value,
      gender : this.gender.value,
      height : this.height.value,
      weight : this.weight.value,
      bloodGroup : this.bloodGroup.value
    }
    //console.log(this.registrationForm);
    this.patientService.addNewPatient(patient).subscribe(data=>console.log(data))
  }
  redirectHome() {
    console.log("object");
    this.router.navigate([""]);
  }

}
