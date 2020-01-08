import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employees } from '../models/employees.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {

  @Input()
  employee:Employees[];
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  id:number
  onClick(id:number){
    this.id = id;
    this.router.navigate(['/employee',this.id]);
  }
}
