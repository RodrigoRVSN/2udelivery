import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnerComponent } from './partner/partner.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'partner',component:PartnerComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
