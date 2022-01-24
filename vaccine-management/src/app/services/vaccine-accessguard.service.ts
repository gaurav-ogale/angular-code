import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineAccessguardService implements CanActivate{

  constructor(private patientService : PatientService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this.patientService.authUser());
    return this.patientService.authUser();
  }


}
