import { Vaccine } from './../../../models/vaccine.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddVaccineService } from 'src/app/services/add-vaccine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-vaccine',
  templateUrl: './schedule-vaccine.component.html',
  styleUrls: ['./schedule-vaccine.component.css']
})
export class ScheduleVaccineComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private vaccineService : AddVaccineService, private router: Router) {
    this.vaccineDetails = this.formBuilder.group({
      name : this.name,
      vaccination : this.vaccination,
      vaccinationDate : this.vaccinationDate,
      brand: this.brand,
      hospital : this.hospital
    })
   }

  vaccineDetails :FormGroup;
  name = new FormControl('',[Validators.required]);
  vaccination = new FormControl();
  vaccinationDate = new FormControl();
  brand = new FormControl('',[Validators.required]);
  hospital = new FormControl('',[Validators.required]);
  givenAt =[];
  ngOnInit(): void {

    this.givenAt= this.vaccineService.getGivenAtData();
    console.log(this.givenAt);
  }

  addVaccineDetails(){
    const vaccine : Vaccine = {
      id :Math.floor((Math.random() * 1000) + 1),
      name : this.name.value,
      vaccine : this.vaccination.value,
      vaccineDate : this.vaccinationDate.value,
      dueDate : "",
      brand : this.brand.value,
      hospital :this.hospital.value,
      age : 0
    }
    this.vaccineService.addVaccineDetails(vaccine).subscribe(data=>console.log("Data Added"))
  }

  redirectHome() {
    console.log("object");
    this.router.navigate([""]);
  }





}
