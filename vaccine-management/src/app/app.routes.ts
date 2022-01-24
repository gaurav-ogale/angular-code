import { VaccineAccessguardService } from './services/vaccine-accessguard.service';
import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';

export const APP_ROUTES: Routes = [
  {
    path: '*',
    redirectTo: 'header',
    pathMatch: 'full',
  },
  { path: 'home', component: HeaderComponent },
  {
    path: 'patient',
    loadChildren: () =>
      import('./modules/patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'vaccine',
    loadChildren: () =>
      import('./modules/vaccine/vaccine.module').then((m) => m.VaccineModule),
    canActivate :[VaccineAccessguardService]
  },
];
