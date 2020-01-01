import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employees } from '../models/employees.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService,private _router: Router) { }

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  employee:Employees = 
  { 
  username: 'ss', 
  email: '',
  password: '',
  confpassword: '',
  contactpreference: '',
  gender: 'female', 
  isactive: true ,
  department: '',
  photopath: ''
};

  
  ngOnInit() {
    console.log(this.employee.email);
  }
  isactive:boolean=true;
  showpreviewstatus:boolean=false;
  // departmentselected:number =2;

  showpreview(){
    this.showpreviewstatus = !this.showpreviewstatus;

  }
  submitValues(employeeform: NgForm){
    console.log(employeeform);
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
