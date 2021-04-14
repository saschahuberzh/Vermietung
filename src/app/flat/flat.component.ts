import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  id: number = 0;

  constructor(private route: ActivatedRoute) {
    
   }

 datas = [ {"quadratMeter": 32, "etage": "1. Etage", "text": "«Ruhige Ferienwohnung am Rand von Sedrun. Ferienwohnung mit Dusche/WC für max. 4 Personen»", "adresse": "7188 Sedrun", "preis": 80},
   {"quadratMeter": 30, "etage": "3. Etage", "text": "«Ruhige Ferienwohnung am Rand von Sedrun. Ferienwohnung mit Dusche/WC für max. 2 Personen»", "adresse": "7188 Sedrun", "preis": 70},
   {"quadratMeter": 30, "etage": "3. Etage", "text": "«Ruhige Ferienwohnung am Rand von Sedrun. Ferienwohnung mit Dusche/WC für max. 2 Personen»", "adresse": "7188 Sedrun", "preis": 60}]

  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('flatId'));
  }



}
