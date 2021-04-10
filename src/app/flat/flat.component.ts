import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  constructor() { }

   datas = [ {"quadratMeter": 32, "etage": "1. Etage", "text": "«Ruhige Ferienwohnung am Rand von Sedrun. Ferienwohnung mit Dusche/WC für max. 4 Personen»", "adresse": "7188 Sedrun", "preis": 80},
   {"quadratMeter": 30, "etage": "3. Etage", "text": "«Ruhige Ferienwohnung am Rand von Sedrun. Ferienwohnung mit Dusche/WC für max. 2 Personen»", "adresse": "7188 Sedrun", "preis": 60},
   {"quadratMeter": 30, "etage": "3. Etage", "text": "«Ruhige Ferienwohnung am Rand von Sedrun. Ferienwohnung mit Dusche/WC für max. 2 Personen»", "adresse": "7188 Sedrun", "preis": 60}]

  ngOnInit(): void {
  }



}
