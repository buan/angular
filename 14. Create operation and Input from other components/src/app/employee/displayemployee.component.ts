import { Component, OnInit, Input } from '@angular/core';
import { Employees } from '../models/employees.model';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {

  @Input()
  employee:Employees[];
  constructor() { }

  ngOnInit() {
  }

}
