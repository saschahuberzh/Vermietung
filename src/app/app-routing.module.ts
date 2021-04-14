import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FlatsComponent } from './flats/flats.component';
import { FlatComponent } from './flat/flat.component';
import { HomeComponent } from "./home/home.component";
import { RentalComponent } from "./rental/rental.component";
import { ImpressumComponent } from "./impressum/impressum.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'rental', component: RentalComponent},
  { path: 'flats', component: FlatsComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'impressum', component: ImpressumComponent},
  { path: 'flat/:flatId', component: FlatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
