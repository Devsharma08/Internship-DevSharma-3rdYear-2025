import { Routes } from '@angular/router';
import { Home } from '../core/pages/home/home';
import { AppointmentList } from '../core/pages/appointment-list/appointment-list';
import { Dashboard } from '../core/pages/dashboard/dashboard';
import { HospitalList } from '../core/pages/hospital-list/hospital-list';
import { NewHospital } from '../core/pages/new-hospital/new-hospital';
import { PatientList } from '../core/pages/patient-list/patient-list';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:Home
  },
  {
    path:'appointmentlist',
    component:AppointmentList
  },
  {
    path:'dashboard',
    component:Dashboard
  },
  {
    path:'hospitallist',
    component:HospitalList
  },
  {
    path:'newhospital',
    component:NewHospital
  },
  {
    path:'patientlist',
    component:PatientList
  }
];
