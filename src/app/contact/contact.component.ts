import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
//https://www.freakyjolly.com/angular-7-8-9-download-pdf-files-in-browser-instead-of-opening-in-new-tab-quick-solution/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  downloadPdf() {
    const pdfUrl = './assets/flyer.pdf';
    const pdfName = 'flyer';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
