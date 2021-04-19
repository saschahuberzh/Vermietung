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

  kalender: number[] = [];
  kalenderWhite: boolean[] = [];
   
   
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('flatId'));

    const datum = new Date();
    console.log("Year: " + datum.getFullYear() + " Month: " + (datum.getMonth()+1) + " Day: " + datum.getDate());
    const kalender: number[] = [];
    const kalenderWhite : boolean[] = [];

    const thisMonthWithFirstDay = new Date(datum.getFullYear(), datum.getMonth(), 1);
    let thisMonthFirstDay = thisMonthWithFirstDay.getDay();
    if(thisMonthFirstDay != 0){
      const lastMonth = new Date(datum.getFullYear(), datum.getMonth(), 0);
      let lastMonthMaxDay = lastMonth.getDate();
      for(let i = 1; i < thisMonthFirstDay; i++){
          kalender.unshift(lastMonthMaxDay);
          kalenderWhite.unshift(false);
          lastMonthMaxDay = lastMonthMaxDay -1;
      }
    }

    const thisMonth = new Date(datum.getFullYear(), datum.getMonth()+1, 0);
    let thisMonthMaxDay = thisMonth.getDate();
    for(let i = 1; i <= thisMonthMaxDay; i++){
      kalender.push(i);
      kalenderWhite.push(true);
    }

    if(thisMonthFirstDay != 7){
      const firstMonth = new Date(datum.getFullYear(), datum.getMonth(), 0); 
      let k = 1;
      while(kalender.length / 7 != 5){
        kalender.push(k);
        kalenderWhite.push(false);
        k++;
      }
    }
    
    
    console.log(kalender);
    this.kalender = kalender;
    this.kalenderWhite = kalenderWhite;
  }



}
