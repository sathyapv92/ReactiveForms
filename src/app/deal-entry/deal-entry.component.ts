import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'deal-entry',
  templateUrl: './deal-entry.component.html',
  styleUrls: ['./deal-entry.component.css']
})
export class DealEntryComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  myGroup :FormGroup;
  ngOnInit() {
     this.myGroup = new FormGroup({
       branch: new FormControl('Demo Branch'),
      currency: new FormControl('Eur'),
      caterpillarName :new FormControl('Demo Name'),
      stripCycle: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl('28/2/1992'),
      productType: new FormControl('Global'),
      notionalAmount  : new FormControl('1,93,00000')
     });
  
  }
   currency = ['INR', 'USD', 'OHI', 'VAS'];
   stripCycle =['Weekly','Monthly'];
   description =['Weekly','Monthly'];
  save(){

  }
}
