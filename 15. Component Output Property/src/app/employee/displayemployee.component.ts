import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employees } from '../models/employees.model';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {

  @Input()
  employee:Employees[];

  employees: Employees;

  @Output()
  sendCheckedValue: EventEmitter<boolean> = new EventEmitter<boolean>();
  checked:boolean=true;
  


  handleClickcheck(){
    this.checked=!this.checked;
    console.log(this.checked);
    this.sendCheckedValue.emit(this.checked);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
