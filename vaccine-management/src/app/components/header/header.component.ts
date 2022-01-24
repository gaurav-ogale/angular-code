import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
  }

  isAutheticated(){
    return this.patientService.authUser()
  }

}
