import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FlatComponent } from './flat/flat.component';
import { HomeComponent } from "./home/home.component";
import { RentalComponent } from "./rental/rental.component";
import { ImpressumComponent } from "./impressum/impressum.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'rental', component: RentalComponent},
  { path: 'flat', component: FlatComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
