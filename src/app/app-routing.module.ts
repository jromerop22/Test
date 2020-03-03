import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent }  from './components/form-login/form-login.component';
const routes: Routes = [
  { path:'', component : FormRegisterComponent},
  { path:'login', component : FormLoginComponent},
  { path:'register', component : FormRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
