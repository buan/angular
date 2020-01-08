import { Component, OnInit } from '@angular/core';
import { Employees } from '../models/employees.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }
  
employee:Employees[];
dataFromChild:Employees;

getCheckedValue:boolean;

  ngOnInit() {
    this.employee = this._employeeService.getEmployeeList();
  }

}
