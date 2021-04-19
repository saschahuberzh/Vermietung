import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.css']
})
export class PaymeComponent implements OnInit {
 
  constructor() {
  
   }
  
 
  ngOnInit(): void {
    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "100.00",
      onApprove: (details) =>
      {
        alert("Transaction Successfully");
      }
    });
  }

}
