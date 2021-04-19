import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RentalComponent } from './rental/rental.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from './navigation/navigation.component';
import { FlatComponent } from './flat/flat.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { FlatsComponent } from './flats/flats.component';
import { AgmComponent } from './agm/agm.component';
import { PaymeComponent } from './payme/payme.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RentalComponent,
    NavigationComponent,
    FlatComponent,
    ContactComponent,
    FooterComponent,
    ImpressumComponent,
    FlatsComponent,
    AgmComponent,
    PaymeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4QAU8SESL9suBRIIAXJ3PCPfAXgAFO1s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
