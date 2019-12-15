import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor() { }

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  ngOnInit() {
  }
  isactive:boolean=true;
  showpreviewstatus:boolean=false;
  departmentselected:number =2;

  showpreview(){
    this.showpreviewstatus = !this.showpreviewstatus;
    
  }
  submitValues(employeeform: NgForm){
    console.log(employeeform);
  }
}
