import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.css']
})
export class AgmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lat = 46.68076163692712;
  lng = 8.781768796282325;
   
}
